const https = require('https');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const multer = require('multer');
const app = express();


require('../db/conn');
const User = require('../models/userSchema');
const SolarPanel = require('../models/SolarPanelSchema');
const TransportationService = require('../models/TransportationServiceSchema');
const LoanApplicationForm = require('../models/LoanSchema');
const EquipmentBooking = require('../models/equipmentBookingSchemaF');


router.get('/', (req, res) => {
  res.send('Hello World from the server router.js');
});

// Node Mailer
async function mailer(receiveremail, code) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    requireTLS: true,
    auth: {
      user: 'kasghanjera@gmail.com',
      pass: 'ffqv pdng nduc wgjb'
    },  
    tls: {
      rejectUnauthorized: false,
    },
  });

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: 'kasghanjera@gmail.com', // sender address
    to: `${receiveremail}`, // list of receivers
    subject: "Verification Code", // Subject line
    text: `Your verification code is ${code} `, // plain text body
    html: `<b>Your verification code is ${code}</b>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
}

router.post('/verify', async (req, res) => {
  const { Email, Username, Password, ConfirmPassword } = req.body;
  console.log('Received Data:', req.body);

  if (!Email || !Username || !Password || !ConfirmPassword) {
    console.log('Validation Error: Please fill all fields');
    return res.status(422).json({ error: 'Please fill all fields' });
  }

  
  try {
    const userExist = await User.findOne({ Email: Email });
    if (userExist) {
      console.log('Validation Error: Email already registered');
      return res.status(422).json({ error: 'Email already registered' });
    }

    const VerificationCode = Math.floor(100000 + Math.random() * 900000);
    console.log('Generated Verification Code:', VerificationCode);

    const user = new User({ Email, Username, Password, ConfirmPassword, verificationCode: VerificationCode });
    await mailer(Email, VerificationCode);

    console.log('Verification Code sent to user:', Email);

    res.send({ message: 'Verification code sent to your Email', VerificationCode: VerificationCode, udata: user });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ message: 'Failed to verify' });
  }
});

router.post('/Signup', (req, res) => {
  const { Email, Username, Password, ConfirmPassword, VerificationCode } = req.body;
  console.log('Received verification code:', VerificationCode); // Add this line

  if (!Email || !Username || !Password || !ConfirmPassword || !VerificationCode) {
    return res.status(422).json({ error: 'Please fill all fields' });
  }

  User.findOne({ Email: Email })
    .then((userExist) => {
      console.log('Existing user:', userExist); // Add this line

      if (userExist) {
        if (VerificationCode && userExist.verificationCode && VerificationCode.toString() !== userExist.verificationCode.toString()) {
          return res.status(422).json({ error: 'Invalid verification code' });
        }
        return res.status(422).json({ error: 'Email already registered' });
      }

      console.log('Received Verification Code:', VerificationCode);
      const user = new User({ Email, Username, Password, ConfirmPassword, verificationCode: VerificationCode });

      user.save()
        .then(() => {
          res.status(201).json({ message: 'User registered successfully', verificationCode: VerificationCode });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({ error: 'Failed to register' });
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: 'Failed to register' });
    });
});


// In your server code
// ...
router.post('/Signin', async (req, res) => {
  try {
    const { Email, Password } = req.body;

    if (!Email || !Password) {
      return res.status(400).json({ error: 'Please fill all the fields' });
    }

    const userLogin = await User.findOne({ Email: Email });

    if (userLogin) {
      const isMatch = await bcrypt.compare(Password, userLogin.Password);

      if (isMatch) {
        const token = jwt.sign({ _id: userLogin._id }, process.env.SECRET_KEY);
        const userName = userLogin.Username; // Get the user's name

        res.cookie('jwtoken', token, {
          expires: new Date(Date.now() + 25892000000),
          httpOnly: true,
        });

        res.json({ message: 'User Signin Successfully', username: userName }); // Include the user's name in the response
      } else {
        res.status(400).json({ error: 'Invalid Credentials' });
      }
    } else {
      res.status(400).json({ error: 'Invalid Credentials' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to signin' });
  }
});
// ...



const Question = require('../models/questionSchema');

const storage = multer.memoryStorage(); // Use memory storage for this example
const upload = multer({ storage: storage });

router.post('/saveQuestion', upload.single('image'), async (req, res) => {
  const { question } = req.body;

  if (!question) {
    return res.status(422).json({ error: 'Please enter your question' });
  }

  try {
    const newQuestion = new Question({ question });

    // If an image is uploaded, handle it
    if (req.file) {
      newQuestion.image.data = req.file.buffer;
      newQuestion.image.contentType = req.file.mimetype;
    }

    await newQuestion.save();

    res.json({ message: 'Question saved successfully' });
  } catch (err) {
    console.error('Error saving the question:', err);
    res.status(500).json({ error: 'Failed to save the question' });
  }
});




router.get('/getImage', async (req, res) => {
  const questionId = req.query.questionId;
  try {
    // Retrieve the image data from your MongoDB database
    const question = await Question.findOne({ _id: questionId });

    if (!question || !question.image) {
      return res.status(404).json({ error: 'Image not found' });
    }

    // Set the appropriate content type for the image
    res.contentType(question.image.contentType);

    // Send the image data as a response
    res.send(question.image.data);
  } catch (error) {
    console.error('Error retrieving image:', error);
    res.status(500).json({ error: 'Failed to retrieve the image' });
  }
});



router.post('/SolarPanel', async (req, res) => {
  const { name, nic, phoneNumber, numberOfPlates, hoursOrDays, address } = req.body;

  if (!name || !nic || !phoneNumber || !numberOfPlates || !hoursOrDays || !address) {
    return res.status(422).json({ error: 'Please fill all fields' });
  }

  try {
    const newSolarPanel = new SolarPanel({
      name,
      nic,
      phoneNumber,
      numberOfPlates,
      hoursOrDays,
      address,
    });

    await newSolarPanel.save();

    res.json({ message: 'SolarPanel data saved successfully' });
  } catch (err) {
    console.error('Error saving SolarPanel data:', err);
    res.status(500).json({ error: 'Failed to save SolarPanel data' });
  }
});


router.post('/Transportation-service', async (req, res) => {
  try {
    const { pickUpLocation, dropLocation, date, time } = req.body;
    const service = new TransportationService({
      pickUpLocation,
      dropLocation,
      date,
      time,
    });
    await service.save();
    res.json({ message: 'Service saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error saving service' });
  }
});


// Replace LoanApplicationFormModel with LoanApplicationForm
router.post('/LoanApplicationForm', async (req, res) => {
  const {
    desiredLoanAmount,
    annualIncome,
    firstName,
    lastName,
    dayOfBirth,
    monthOfBirth,
    yearOfBirth,
    maritalStatus,
    nicNumber,
    phoneNumber,
    email,
    postalCode,
    address,
    residencyDuration,
  } = req.body;

  if (
    !desiredLoanAmount ||
    !annualIncome ||
    !firstName ||
    !lastName

  ) {
    return res.status(422).json({ error: 'Please fill all fields' });
  }

  try {
    const newLoanApplicationForm = new LoanApplicationForm({
      desiredLoanAmount,
      annualIncome,
      firstName,
      lastName,
      dayOfBirth,
      monthOfBirth,
      yearOfBirth,
      maritalStatus,
      nicNumber,
      phoneNumber,
      email,
      postalCode,
      address,
      residencyDuration,
    });

    await newLoanApplicationForm.save();

    res.json({ message: 'Loan Application Form data saved successfully' });
  } catch (err) {
    console.error('Error saving Loan Application Form data:', err);
    res.status(500).json({ error: 'Failed to save Loan Application Form data' });
  }
});






router.post('/passwordReset', async (req, res) => {
  const { action, Email } = req.body;

  if (!action) {
    return res.status(422).json({ error: 'Please provide an action' });
  }

  if (!Email && action === 'checkExistence') {
    return res.status(422).json({ error: 'Please provide an email for existence check' });
  }

  try {
    if (action === 'checkExistence') {
      const emailExists = await doesEmailExist(Email);

      if (emailExists) {
        return res.json({ exists: true });
      } else {
        return res.json({ exists: false });
      }
    } else if (action === 'initiateReset') {
      // Check if the user exists with the provided email
      const user = await User.findOne({ Email: Email });

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Generate the reset code
      const resetCode = Math.floor(100000 + Math.random() * 900000);

      // Send the reset code to the user's email using Nodemailer
      await mailer(Email, resetCode);

      return res.json({ message: 'Reset code sent to your email', resetCode: resetCode });
    } else {
      return res.status(422).json({ error: 'Invalid action provided' });
    }
  } catch (error) {
    console.error('Error handling password reset action:', error);
    return res.status(500).json({ error: 'Failed to handle password reset action' });
  }
});

// ...

const generateResetCode = async (email) => {
  // No need to store the reset code in the database in this case
  // You can remove the database update logic

  const resetCode = Math.floor(100000 + Math.random() * 900000);
  return resetCode;
};





router.post('/updatePassword', async (req, res) => {
  const { newPassword, email } = req.body;

  try {
    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update the user's password in the database based on their email
    await User.findOneAndUpdate({ Email: email }, { Password: hashedPassword });

    res.json({ message: 'Password updated successfully' });
  } catch (error) {
    console.error('Error updating password:', error);
    res.status(500).json({ error: 'Failed to update password' });
  }
});



router.post('/book-equipment', async (req, res) => {
  try {
    // Extract form data from the request body, including the new fields
    const {
      name,
      equipmentName,
      address,
      phoneNumber,
      timeDuration,
      accountName,
      accountNumber,
      screenshot,
    } = req.body;

    // Create a new EquipmentBooking document
    const booking = new EquipmentBooking({
      name,
      equipmentName,
      address,
      phoneNumber,
      timeDuration,
      accountName,
      accountNumber,
      screenshot,
    });

    // Save the document to the database
    await booking.save();

    // Respond with a success message
    res.status(201).json({ message: 'Equipment booked successfully' });
  } catch (error) {
    // Handle errors, e.g., database errors
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



router.get('/getUserName', async (req, res) => {
  const { email } = req.query;

  try {
    // Find the user with the matching email in the database
    const user = await User.findOne({ Email: email });

    if (user) {
      // If the user is found, send their name in the response
      res.json({ name: user.Username });
    } else {
      // If the user is not found, return an error message
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ error: 'Failed to fetch user data' });
  }
});






module.exports = router;

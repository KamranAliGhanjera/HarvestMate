const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  image: {
    data: Buffer, // Store image data as binary
    contentType: String, // Store image content type (e.g., 'image/jpeg', 'image/png')
  },
  // ... other fields as needed
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;

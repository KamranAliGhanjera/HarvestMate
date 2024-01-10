const dotenv = require("dotenv");
const express = require('express');
const app = express();
const bodyParser = require('body-parser'); // Import body-parser

dotenv.config({ path: './config.env' });
require('./db/conn');

app.use(bodyParser.json()); // Add body-parser middleware

const User = require('./models/userSchema');

app.use(require('./Router/auth'));
const PORT = process.env.PORT;

// Middleware
const middleware = (req, res, next) => {
  console.log('Hello, my middleware');
  next();
};

app.get('/About', middleware, (req, res) => {
  res.send('Hello About World from the server');
});


app.listen(PORT, () => {
  console.log(`Server is running at port no ${PORT}`);
});
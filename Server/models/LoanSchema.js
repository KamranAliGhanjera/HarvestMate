const mongoose = require('mongoose');

const LoanApplicationFormSchema = new mongoose.Schema({
  desiredLoanAmount: {
    type: String,
    required: true,
  },
  annualIncome: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dayOfBirth: {
    type: String,
    required: true,
  },
  monthOfBirth: {
    type: String,
    required: true,
  },
  yearOfBirth: {
    type: String,
    required: true,
  },
  maritalStatus: {
    type: String,
    required: true,
  },
  nicNumber: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  postalCode: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  residencyDuration: {
    type: String,
    required: true,
  },
});

const LoanApplicationFormModel = mongoose.model('LoanApplicationForm', LoanApplicationFormSchema);

module.exports = LoanApplicationFormModel;

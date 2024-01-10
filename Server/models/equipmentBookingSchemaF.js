const mongoose = require('mongoose');

// Define the EquipmentBooking schema
const equipmentBookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  equipmentName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  timeDuration: {
    type: String,
    required: true,
  },
  accountName: {
    type: String, // New field: Account Name
    required: true,
  },
  accountNumber: {
    type: String, // New field: Account Number
    required: true,
  },
  screenshot: {
    type: String, // New field: Screenshot (URI of the uploaded image)
    required: true,
  },
});

// Create a model using the schema
const EquipmentBooking = mongoose.model('EquipmentBooking', equipmentBookingSchema);

module.exports = EquipmentBooking;

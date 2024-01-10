const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  pickUpLocation: String,
  dropLocation: String,
  date: Date,
  time: String,
});

const TransportationService = mongoose.model('TransportationService', serviceSchema);

module.exports = TransportationService;

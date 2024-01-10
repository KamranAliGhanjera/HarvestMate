const mongoose = require('mongoose');


const SolarPanelSchema = new mongoose.Schema({
    name: String,
    nic: String,
    phoneNumber: String,
    numberOfPlates: Number,
    hoursOrDays: String,
    address: String,
  });
  
  const SolarPanel = mongoose.model('SolarPanel', SolarPanelSchema);
  
  module.exports = SolarPanel;
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PatientSchema = new Schema({
  patientId: {
    type: Number,
  },

  surname: {
    type: String,
    required: "Enter a surname",
  },

  othernames: {
    type: String,
    required: "Enter other names",
  },

  gender: {
    type: String,
  },

  phoneNumber: {
    type: Number,
  },

  residentialAddress: {
    type: String,
  },

  emergencyName: {
    type: String,
  },

  emergencyContact: {
    type: Number,
  },

  relationshipWithPatient: {
    type: String,
  },

  created_date: {
    type: Date,
    default: Date.now,
  },
});

const EncounterSchema = new Schema({
  dateTime: {
    type: Date,
    required: true,
  },
  encounterType: {
    type: String,
    enum: ["Emergency", "OPD", "Specialist Care"],
    required: true,
  },
});

const VitalsSchema = new Schema({
  patientId: {
    type: Number,
    required: true,
  },
  bloodPressure: {
    type: String,
  },
  temperature: {
    type: String,
  },
  pulse: {
    type: String,
  },
  sp02: {
    type: String,
  },
  recordedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = PatientSchema;
module.exports = EncounterSchema;
module.exports = VitalsSchema;

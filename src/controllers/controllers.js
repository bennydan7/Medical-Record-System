const mongoose = require("mongoose");

const PatientSchema = require("../models/models");

const Patient = mongoose.model("Patient", PatientSchema);

// add new patients

const addnewPatients = (req, res) => {
  let newPatients = new Patient(req.body);

  newPatients.save().then((patient) => {
    res.json(patient).catch((err) => {
      res.status(500).send(err.message || "Error Creating Students");
    });
  });
};

//get all patients

const getPatients = (req, res) => {
  Patient.find({})
    .then((patient) => {
      res.json(patient);
    })
    .catch((err) => {
      res.status(404).send(err.message || "Students Not Found");
    });
};

// get patients with id

const getPatientWithId = (req, res) => {
  Patient.findById(req.params.PatientId)
    .then((patient) => {
      res.json(patient);
    })
    .catch((err) => {
      res.status(404).send(err.message || "Patient Not Found");
    });
};

// update patient
const updatePatients = (req, res) => {
  Patient.findOneAndUpdate({ _id: req.params.PatientId }.req.body, {
    new: true,
  })
    .then((patient) => {
      res.json(patient);
    })
    .catch((err) => {
      res.status(500).send(err.message || "Error Updating Patient");
    });
};

// delete patients

const deletePatients = (req, res) => {
  Patient.deleteOne({ _id: req.params.PatientId }).then(() => {
    res
      .json({
        message: "Patient Deleted Successfully",
      })
      .catch((err) => {
        res.status(500).send(err.message || "Could not delete Patient");
      });
  });
};

module.exports = addnewPatients;
module.exports = getPatients;
module.exports = getPatientWithId;
module.exports = updatePatients;
module.exports = deletePatients;

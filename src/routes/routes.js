const addNewPatients = require("../controllers/controllers");
const getPatients = require("../controllers/controllers");
const getPatientWithId = require("../controllers/controllers");
const deletePatient = require("../controllers/controllers");
const updatePatient = require("../controllers/controllers");

const defineRoutes = (app) => {
  app
    .route("/patient")
    // get all patients
    .get((req, res, next) => {
      // middleware
      console.log("Request Successful");
      next();
    }, getPatients)

    // post a new patient
    .post(addNewPatients);

  app
    .route("/patients/:patientId")
    // get specific patient
    .get(getPatientWithId)

    // update patient
    .put(updatePatient)

    // delete patient
    .delete(deletePatient);
};

module.exports = defineRoutes;

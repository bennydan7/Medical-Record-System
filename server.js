const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const defineRoutes = require("./src/routes/routes");
const PatientSchema = require("./src/models/models");

const Patient = mongoose.model("Patient", PatientSchema);

const app = express();
const PORT = 3005;

//connecting mongoose
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/", {
  useNewUrlParser: true,
});

// body-parser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json);

defineRoutes(app);

app.get("/", (req, res) => {
  res.send(`Node and Express server is running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}`);
});

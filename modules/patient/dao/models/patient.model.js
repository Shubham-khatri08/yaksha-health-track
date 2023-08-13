var mongoose = require("mongoose");

var PatientSchema = require("../schemas/patient.schema");
module.exports = mongoose.model("Patient", PatientSchema);

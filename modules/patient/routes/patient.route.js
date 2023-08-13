const express = require("express");
const router = express.Router();
const PatientController = require("../controller/patient.controller");

const patientController = new PatientController();

// Create a new patient
router.post("/", patientController.createPatient);

// Search for patients based on query
router.get("/search", patientController.searchPatients);

// Get a patient by ID
router.get("/:id", patientController.getPatientById);

// Update a patient by ID
router.put("/:id", patientController.updatePatient);

// Delete a patient by ID
router.delete("/:id", patientController.deletePatient);

module.exports = router;

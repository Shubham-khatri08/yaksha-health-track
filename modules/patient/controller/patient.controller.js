const PatientServiceImpl = require("../service/impl/patient.serviceImpl");

const patientService = new PatientServiceImpl();

class PatientController {
  async createPatient(req, res) {
    try {
      const patientData = req.body;
      const patient = await patientService.createPatient(patientData);
      res.status(201).json(patient);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async getPatientById(req, res) {
    try {
      const patientId = req.params.id;
      const patient = await patientService.getPatientById(patientId);
      if (!patient) {
        return res.status(404).json({ error: "Patient not found" });
      }
      res.json(patient);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async updatePatient(req, res) {
    try {
      const patientId = req.params.id;
      const patientData = req.body;
      const updatedPatient = await patientService.updatePatient(
        patientId,
        patientData
      );
      if (!updatedPatient) {
        return res.status(404).json({ error: "Patient not found" });
      }
      res.json(updatedPatient);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async deletePatient(req, res) {
    try {
      const patientId = req.params.id;
      const deletedPatient = await patientService.deletePatient(patientId);
      if (!deletedPatient) {
        return res.status(404).json({ error: "Patient not found" });
      }
      res.json(deletedPatient);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async searchPatients(req, res) {
    try {
      const query = req.query;
      const patients = await patientService.searchPatients(query);
      res.json(patients);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
}

module.exports = PatientController;

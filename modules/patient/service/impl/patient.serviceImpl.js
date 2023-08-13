const Patient = require("../../dao/models/patient.model");
const PatientService = require("../patient.serivce");

class PatientServiceImpl extends PatientService {
  async createPatient(patientData) {
    try {
      const patient = await Patient.create(patientData);
      return patient;
    } catch (error) {
      throw new Error("Failed to get patients.");
    }
  }

  async getPatientById(patientId) {
    try {
      const patient = await Patient.findById(patientId);
      return patient;
    } catch (error) {
      throw new Error("Failed to get patient.");
    }
  }

  async updatePatient(patientId, patientData) {
    try {
      const patient = await Patient.findByIdAndUpdate(patientId, patientData, {
        new: true,
      });
      return patient;
    } catch (error) {
      throw new Error("Failed to update patient.");
    }
  }

  async deletePatient(patientId) {
    try {
      const patient = await Patient.findByIdAndDelete(patientId);
      return patient;
    } catch (error) {
      throw new Error("Failed to get patient.");
    }
  }

  async searchPatients(query) {
    try {
      const patients = await Patient.find(query);
      return patients;
    } catch (error) {
      throw new Error("Failed to get patients.");
    }
  }
}

module.exports = PatientServiceImpl;

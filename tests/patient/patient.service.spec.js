const PatientServiceImpl = require("../../modules/patient/service/impl/patient.serviceImpl");
const Patient = require("../../modules/patient/dao/models/patient.model");

jest.mock("../../modules/patient/dao/models/patient.model");

let patientServiceBoundaryTest = "PatientService functional test";

describe("Patient Service", () => {
  let patientService;

  beforeEach(() => {
    patientService = new PatientServiceImpl();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("functional", () => {
    it(`${patientServiceBoundaryTest} should create a new patient`, async () => {
      const patientData = {
        /* mock patient data */
      };
      Patient.create.mockResolvedValue(patientData);

      const result = await patientService.createPatient(patientData);
      expect(result).toEqual(patientData);
    });

    it(`${patientServiceBoundaryTest} should get a patient by ID`, async () => {
      const patientData = {
        /* mock patient data */
      };
      Patient.findById.mockResolvedValue(patientData);

      const result = await patientService.getPatientById("mockId");
      expect(result).toEqual(patientData);
    });

    it(`${patientServiceBoundaryTest} should update a patient by ID`, async () => {
      const updatedPatientData = {
        /* mock updated patient data */
      };
      Patient.findByIdAndUpdate.mockResolvedValue(updatedPatientData);

      const result = await patientService.updatePatient(
        "mockId",
        updatedPatientData
      );
      expect(result).toEqual(updatedPatientData);
    });

    it(`${patientServiceBoundaryTest} should delete a patient by ID`, async () => {
      const deletedPatientData = {
        /* mock deleted patient data */
      };
      Patient.findByIdAndDelete.mockResolvedValue(deletedPatientData);

      const result = await patientService.deletePatient("mockId");
      expect(result).toEqual(deletedPatientData);
    });

    it(`${patientServiceBoundaryTest} should search patients`, async () => {
      const query = {
        /* mock query object */
      };
      const mockPatients = [
        ,/* mock patient data */
        /* mock patient data */
      ];
      Patient.find.mockResolvedValue(mockPatients);

      const result = await patientService.searchPatients(query);
      expect(result).toEqual(mockPatients);
    });

    it(`${patientServiceBoundaryTest} should throw an error when failing to create a patient`, async () => {
      const error = new Error("Failed to create a patient.");
      Patient.create.mockRejectedValue(error);
      await expect(patientService.createPatient({})).rejects.toThrow(error);
    });

    it(`${patientServiceBoundaryTest} should throw an error when failing to get a patient by ID`, async () => {
      const error = new Error("Failed to get a patient by ID.");
      Patient.findById.mockRejectedValue(error);
      await expect(patientService.getPatientById("mockId")).rejects.toThrow(
        error
      );
    });

    it(`${patientServiceBoundaryTest} should throw an error when failing to update a patient by ID`, async () => {
      const error = new Error("Failed to update a patient by ID.");
      Patient.findByIdAndUpdate.mockRejectedValue(error);
      await expect(patientService.updatePatient("mockId", {})).rejects.toThrow(
        error
      );
    });

    it(`${patientServiceBoundaryTest} should throw an error when failing to delete a patient by ID`, async () => {
      const error = new Error("Failed to delete a patient by ID.");
      Patient.findByIdAndDelete.mockRejectedValue(error);
      await expect(patientService.deletePatient("mockId")).rejects.toThrow(
        error
      );
    });

    it(`${patientServiceBoundaryTest} should throw an error when failing to search patients`, async () => {
      const error = new Error("Failed to search patients.");
      Patient.find.mockRejectedValue(error);
      await expect(patientService.searchPatients({})).rejects.toThrow(error);
    });
  });
});

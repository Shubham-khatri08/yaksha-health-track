const PatientServiceImpl = require("../../modules/patient/service/impl/patient.serviceImpl");
const PatientController = require("../../modules/patient/controller/patient.controller");

jest.mock("../../modules/patient/service/impl/patient.serviceImpl");

describe("Patient Controller", () => {
  describe("boundary", () => {
    // ... previous test cases for createPatient ...

    it("should get a patient by ID", async () => {
      const mockPatient = { _id: "patient_id", name: "John Doe" };
      PatientServiceImpl.prototype.getPatientById = jest
        .fn()
        .mockResolvedValue(mockPatient);

      const mockReq = {
        params: { id: "patient_id" },
      };
      const mockRes = {
        json: jest.fn(),
      };

      await new PatientController().getPatientById(mockReq, mockRes);

      expect(PatientServiceImpl.prototype.getPatientById).toHaveBeenCalledWith(
        "patient_id"
      );
      expect(mockRes.json).toHaveBeenCalledWith(mockPatient);
    });

    it("should handle get patient by ID error", async () => {
      const mockError = new Error("Get patient by ID error");
      PatientServiceImpl.prototype.getPatientById = jest
        .fn()
        .mockRejectedValue(mockError);

      const mockReq = {
        params: { id: "patient_id" },
      };
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await new PatientController().getPatientById(mockReq, mockRes);

      expect(PatientServiceImpl.prototype.getPatientById).toHaveBeenCalledWith(
        "patient_id"
      );
      expect(mockRes.status).toHaveBeenCalledWith(500);
      expect(mockRes.json).toHaveBeenCalledWith({
        error: "Internal server error",
      });
    });

    it("should update a patient by ID", async () => {
      const mockUpdatedPatient = { _id: "patient_id", name: "Updated Name" };
      PatientServiceImpl.prototype.updatePatient = jest
        .fn()
        .mockResolvedValue(mockUpdatedPatient);

      const mockReq = {
        params: { id: "patient_id" },
        body: { name: "Updated Name" },
      };
      const mockRes = {
        json: jest.fn(),
      };

      await new PatientController().updatePatient(mockReq, mockRes);

      expect(PatientServiceImpl.prototype.updatePatient).toHaveBeenCalledWith(
        "patient_id",
        mockReq.body
      );
      expect(mockRes.json).toHaveBeenCalledWith(mockUpdatedPatient);
    });

    it("should handle update patient error", async () => {
      const mockError = new Error("Update patient error");
      PatientServiceImpl.prototype.updatePatient = jest
        .fn()
        .mockRejectedValue(mockError);

      const mockReq = {
        params: { id: "patient_id" },
        body: { name: "Updated Name" },
      };
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await new PatientController().updatePatient(mockReq, mockRes);

      expect(PatientServiceImpl.prototype.updatePatient).toHaveBeenCalledWith(
        "patient_id",
        mockReq.body
      );
      expect(mockRes.status).toHaveBeenCalledWith(500);
      expect(mockRes.json).toHaveBeenCalledWith({
        error: "Internal server error",
      });
    });

    it("should delete a patient by ID", async () => {
      const mockDeletedPatient = { _id: "patient_id", name: "Deleted Name" };
      PatientServiceImpl.prototype.deletePatient = jest
        .fn()
        .mockResolvedValue(mockDeletedPatient);

      const mockReq = {
        params: { id: "patient_id" },
      };
      const mockRes = {
        json: jest.fn(),
      };

      await new PatientController().deletePatient(mockReq, mockRes);

      expect(PatientServiceImpl.prototype.deletePatient).toHaveBeenCalledWith(
        "patient_id"
      );
      expect(mockRes.json).toHaveBeenCalledWith(mockDeletedPatient);
    });

    it("should handle delete patient error", async () => {
      const mockError = new Error("Delete patient error");
      PatientServiceImpl.prototype.deletePatient = jest
        .fn()
        .mockRejectedValue(mockError);

      const mockReq = {
        params: { id: "patient_id" },
      };
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await new PatientController().deletePatient(mockReq, mockRes);

      expect(PatientServiceImpl.prototype.deletePatient).toHaveBeenCalledWith(
        "patient_id"
      );
      expect(mockRes.status).toHaveBeenCalledWith(500);
      expect(mockRes.json).toHaveBeenCalledWith({
        error: "Internal server error",
      });
    });

    it("should search patients", async () => {
      const mockPatients = [
        { _id: "patient_id_1", name: "Patient 1" },
        { _id: "patient_id_2", name: "Patient 2" },
      ];
      PatientServiceImpl.prototype.searchPatients = jest
        .fn()
        .mockResolvedValue(mockPatients);

      const mockReq = {
        query: { name: "Patient 1" },
      };
      const mockRes = {
        json: jest.fn(),
      };

      await new PatientController().searchPatients(mockReq, mockRes);

      expect(PatientServiceImpl.prototype.searchPatients).toHaveBeenCalledWith(
        mockReq.query
      );
      expect(mockRes.json).toHaveBeenCalledWith(mockPatients);
    });

    it("should handle search patients error", async () => {
      const mockError = new Error("Search patients error");
      PatientServiceImpl.prototype.searchPatients = jest
        .fn()
        .mockRejectedValue(mockError);

      const mockReq = {
        query: { name: "Patient 1" },
      };
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await new PatientController().searchPatients(mockReq, mockRes);

      expect(PatientServiceImpl.prototype.searchPatients).toHaveBeenCalledWith(
        mockReq.query
      );
      expect(mockRes.status).toHaveBeenCalledWith(500);
      expect(mockRes.json).toHaveBeenCalledWith({
        error: "Internal server error",
      });
    });

    // ... other test cases for remaining methods ...
  });
});

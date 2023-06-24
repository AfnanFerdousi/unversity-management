import express from 'express';
import validateRequest from '../../middlewares/validateRequests';
import { AcademicSemesterValidation } from './academicSemester.validation';
import { AcademicSemesterController } from './academicSemester.controller';

const router = express.Router();

router.post(
  '/create-semester',
  validateRequest(AcademicSemesterValidation.academicSemesterZodSchema),
  AcademicSemesterController.createSemester
);

router.get('/get-all-semesters', AcademicSemesterController.getAllSemesters);
export const AcademicSemesterRoutes = { router };

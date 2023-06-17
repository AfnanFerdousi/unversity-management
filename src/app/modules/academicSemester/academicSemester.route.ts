import express from 'express';
import validateRequest from '../../middlewares/validateRequests';
import { AcademicSemesterValidation } from './academicSemester.validation';

const router = express.Router();

// create user
router.post(
  '/create-user',
  validateRequest(AcademicSemesterValidation.academicSemesterZodSchema)
);

export const AcademicSemesterRoutes = { router };

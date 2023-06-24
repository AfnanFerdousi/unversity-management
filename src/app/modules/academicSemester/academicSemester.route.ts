import express from 'express';
import validateRequest from '../../middlewares/validateRequests';
import { AcademicSemesterValidation } from './academicSemester.validation';
import { AcademicSemesterController } from './academicSemester.controller';

const router = express.Router();

router.post(
  '/create-semester',
  validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema),
  AcademicSemesterController.createSemester
);
router.get('/:id', AcademicSemesterController.getSingleSemester);
router.patch(
  '/:id',
  validateRequest(AcademicSemesterValidation.updateAcademicSemesterZodSchema),
  AcademicSemesterController.updateSemester
);
router.get('/get-all-semesters', AcademicSemesterController.getAllSemesters);
export const AcademicSemesterRoutes = { router };

import express from 'express';
import { StudentController } from './student.controller';
import validateRequest from '../../middlewares/validateRequests';
import { StudentValidaion } from './student.validation';
const router = express.Router();

router.get('/:id', StudentController.getSingleStudent);
router.get('/get-all-students', StudentController.getAllStudents);

router.delete('/:id', StudentController.deleteStudent);

router.patch(
  '/:id',
  validateRequest(StudentValidaion.updateStudentZodSchema),
  StudentController.updateStudent
);

export const StudentRoutes = { router };

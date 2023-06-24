import express from 'express';
import { UserRoutes } from '../modules/users/user.route';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route';
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.route';
import { AcademicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes.router,
  },
  {
    path: '/academic-semester/',
    route: AcademicSemesterRoutes.router,
  },
  {
    path: '/academic-faculty/',
    route: AcademicFacultyRoutes.router,
  },
  {
    path: '/academic-department/',
    route: AcademicDepartmentRoutes.router,
  },
];

// mapping over all the routes
moduleRoutes.forEach(route => {
  router.use(route.path, route.route);
});

export default router;

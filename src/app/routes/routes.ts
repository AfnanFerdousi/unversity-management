import express from 'express';
import { UserRoutes } from '../modules/users/user.route';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route';
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.route';
import { AcademicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.route';
import { StudentRoutes } from '../modules/student/student.route';
import { FacultyRoutes } from '../modules/faculty/faculty.route';
import { AdminRoutes } from '../modules/admin/admin.route';
import { ManagementDepartmentRoutes } from '../modules/managementDepartment/managementDepartment.route';

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
  {
    path: '/management-department/',
    route: ManagementDepartmentRoutes.router,
  },
  {
    path: '/students/',
    route: StudentRoutes.router,
  },
  {
    path: '/faculties/',
    route: FacultyRoutes.router,
  },
  {
    path: '/admins/',
    route: AdminRoutes.router,
  },
];

// mapping over all the routes
moduleRoutes.forEach(route => {
  router.use(route.path, route.route);
});

export default router;

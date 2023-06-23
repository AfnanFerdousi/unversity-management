import express from 'express';
import { UserRoutes } from '../modules/users/user.route';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route';

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
];

// mapping over all the routes
moduleRoutes.forEach(route => {
  router.use(route.path, route.route);
});

export default router;

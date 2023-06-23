import express, { Application } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { UserRoutes } from './app/modules/users/user.route';
import { AcademicSemesterRoutes } from './app/modules/academicSemester/academicSemester.route';
const app: Application = express();

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('env');
// application routes
app.use('/api/v1/users/', UserRoutes.router);
app.use('/api/v1/academic-semester/', AcademicSemesterRoutes.router);

//  Testing
// app.get('/', async(req: Request, res: Response, next: NextFunction) => {
//     // throw new ApiError(400, "ERROR VALLAGE NAAAAAAAAAAAA");
//     Promise.reject((new Error('Unhandled promise rejection')))

// })
app.use(globalErrorHandler);

export default app;

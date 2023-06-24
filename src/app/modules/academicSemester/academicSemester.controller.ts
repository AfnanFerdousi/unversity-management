import { NextFunction, Request, Response } from 'express';
import { AcademicSemesterService } from './academicSemester.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendReponse';
import httpStatus from 'http-status';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/pagination';
import { IAcademicSemester } from './academicSemester.interface';
import { academicSemesterFilterableFields } from './academicSemester.constant';

// create a semester
const createSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body;
    const result = await AcademicSemesterService.createSemester(
      academicSemesterData
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Semester created successfully',
      data: result,
    });
    next();
  }
);

// get all semesters and  you can filter too
const getAllSemesters = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, academicSemesterFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);
  const result = await AcademicSemesterService.getAllSemesters(
    filters,
    paginationOptions
  );
  sendResponse<IAcademicSemester[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Semesters fetched successfully',
    data: result.data,
    meta: result.meta,
  });
});

// get single semester
const getSingleSemester = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await AcademicSemesterService.getSingleSemester(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Semester fetched successfully',
    data: result,
  });
});

export const AcademicSemesterController = {
  createSemester,
  getAllSemesters,
  getSingleSemester,
};

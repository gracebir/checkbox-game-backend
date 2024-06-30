/** @format */

import { Response } from "express";

export const successResponse = (
    res: Response,
    data: any,
    message = "Success"
) => {
    res.status(200).json({
        message,
        data,
    });
};

export const errorResponse = (res: Response, message: string, status = 500) => {
    res.status(status).json({
        message,
    });
};
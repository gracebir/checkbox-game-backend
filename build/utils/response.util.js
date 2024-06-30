/** @format */
export const successResponse = (res, data, message = "Success") => {
    res.status(200).json({
        message,
        data,
    });
};
export const errorResponse = (res, message, status = 500) => {
    res.status(status).json({
        message,
    });
};
//# sourceMappingURL=response.util.js.map
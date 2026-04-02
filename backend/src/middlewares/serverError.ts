import {type Request, type Response, type NextFunction} from "express";

export function serverError(err: Error, req: Request, res: Response, next: NextFunction) {
  console.error(" SERVER ERROR:", err.stack || err);
  return res.status(500).json({
    "success": false,
    "message": err.message || "Something went wrong on our end",
    "stack": process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
}
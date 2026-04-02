import {type Response, type Request} from "express";

export function Notfound(req: Request, res: Response) {
   return res.status(404).json({
    "success": false,
    "message": `Route not found - ${req.originalUrl}`,
  });
}
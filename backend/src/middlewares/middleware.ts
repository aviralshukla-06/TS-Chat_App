import { Request, Response, NextFunction } from "express"
import { AuthRequest } from "./types"
import dotenv from "dotenv"
import jwt from "jsonwebtoken"
dotenv.config()
const secret = process.env.JWT_SECRET

export const userMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {

    const authHeader = req.headers.authorization;

    if (!authHeader || !secret) {
        throw new Error("Either secret or token is not defined");
        return;
    }

    try {
        const decodedToken = jwt.verify(authHeader, secret) as { id: number }

        if (decodedToken) {
            req.userId = decodedToken.id;
            next();
        }
    } catch (err) {
        res.status(403).json({
            message: "Invalid or Expired Token"
        });
        return
    }


}

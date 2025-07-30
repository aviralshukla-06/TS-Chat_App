import express from "express";
import { email, z } from "zod"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import bcrypt from "bcrypt"
import { pgClient } from "../db";
dotenv.config()
const secret = process.env.JWT_SECRETS
const app = express();
app.use(express.json())

app.post("/signup", async (req, res) => {
    const reqBody = z.object({
        email: z.string(),
        fullName: z.string().min(3).max(50),
        password: z.string().min(8),
        profilePic: z.string().optional()
    });

    const parsedBody = reqBody.safeParse(req.body);

    if (!parsedBody.success) {
        res.status(411).json({
            message: parsedBody.error.issues
        })
    }

    const existingUserCheck = `SELECT "email" FROM "Users" WHERE email=$1;`
    const insertCheckValue = await pgClient.query(existingUserCheck, [req.body.email])

    if (insertCheckValue.rows.length > 0) {
        res.status(500).send(
            "User already exists. Try another email"
        )
    }

    if (!parsedBody.data) {
        throw new Error("Invalid request: missing data");
    }

    const { email, fullName, password, profilePic } = parsedBody.data;
    const hashedPassword = await bcrypt.hash(password, 7);

    try {

        const userCreation = `INSERT INTO "Users" ("email", "fullName", "password", "profilePic") VALUES ($1, $2, $3, $4);`
        await pgClient.query(userCreation, [email, fullName, hashedPassword, profilePic]);
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "An error occurred while creating the user"
        })
        return
    }

    res.send({
        message: "User created successfully"
    })
});


app.post("/signin", (req, res) => {
    res.send({
        message: "User logged-in successfully"
    })
});


app.get("/signout", (req, res) => {


    res.send(
        "User logged-out successfully"
    )
});

export default app

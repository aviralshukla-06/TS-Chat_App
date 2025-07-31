import express from "express";
import { email, z } from "zod"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import bcrypt from "bcrypt"
import { pgClient } from "../db";
dotenv.config()
const secret = process.env.JWT_SECRET
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
        res.status(400).send(
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


app.post("/signin", async (req, res) => {

    const { email, password } = req.body;
    const signingUser = `SELECT "id" , "password" FROM "Users" WHERE "email"=$1;`
    const insertSignin = await pgClient.query(signingUser, [req.body.email]);

    if (insertSignin.rows.length === 0) {
        res.status(403).json({
            message: "User doesnot exist"
        });
        return;
    }

    const userRow = insertSignin.rows[0];
    const userPass = userRow.password;
    const userId = userRow.id;

    const passMatch = await bcrypt.compare(password, userPass);

    if (!passMatch) {
        res.status(403).json({
            message: "Incorrect password"
        });
        return;
    }
    console.log("executed");

    if (!secret) {
        throw new Error("JWT_SECRET is not defined in environment variables");
    }

    let token: string;

    if (passMatch) {
        token = jwt.sign({
            id: userId
        }, secret)
    } else {
        res.status(403).json({
            message: "Incorrect details"
        });
        return
    }


    res.status(200).send({
        message: "User logged-in successfully",
        token
    })
});


app.post("/signout", (req, res) => {

    res.status(200).send(
        "User logged-out successfully"
    )
});

export default app

import express from "express"
import { userMiddleware } from "../middlewares/middleware"
import { AuthRequest } from "../middlewares/types"
import { Response } from "express"
import { pgClient } from "../db"
const app = express()

app.get("/users", userMiddleware, async (req: AuthRequest, res: Response) => {
    console.log("routefail");
    // try {
    const loggedInUserId = req.userId;
    const otherUsers = `SELECT "fullName" FROM "Users" WHERE "id"<>$1;`
    const otherUsersResponse = await pgClient.query(otherUsers, [loggedInUserId]);

    const filteredOtherUsers = otherUsersResponse.rows;

    res.status(200).json({
        filteredOtherUsers
    })

    // } catch (error) {
    // res.status(500).json({
    //     message: "failed"
    // })
    // }
})

export default app;
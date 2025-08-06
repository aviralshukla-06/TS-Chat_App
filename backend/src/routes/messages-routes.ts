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

app.get("/chatMsgData/:id", userMiddleware, async (req: AuthRequest, res: Response) => {
    const userToChatId = req.params.id;
    const loggedInUserId = req.userId;
    if (!loggedInUserId) {
        return res.status(401).json({
            message: "Unauthorized"
        });
    }

    const messages = ` SELECT * FROM "Messages" WHERE ("senderId" = $1 AND "receiverId" = $2) OR ("senderId" = $2 AND "receiverId" = $1) ORDER BY "timeStamp" ASC;`
    const messageResponse = await pgClient.query(messages, [userToChatId, loggedInUserId])

    const exchangedUserMessages = messageResponse.rows;

    res.status(200).json({
        exchangedUserMessages
    })
})


app.post("/messages/:id", userMiddleware, async (req: AuthRequest, res: Response) => {
    const receiverId = req.params.id;
    const senderId = req.userId;

    try {
        const { text, image } = req.body;

        const newMessage = `INSERT INTO "Messages" ("senderId", "receiverId", "text", "image") VALUES ($1, $2, $3, $4);`
        const newMsgData = await pgClient.query(newMessage, [senderId, receiverId, text, image]);

        res.status(200).json({
            newMsgData,
            message: "message sent successfully"
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal server error"
        })
    }
})
export default app;
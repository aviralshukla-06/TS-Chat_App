import express from "express";
import authRoutes from "./routes/auth-routes"
import messageRoutes from "./routes/messages-routes"
const app = express();

app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/auth", messageRoutes)

app.listen(3000, () => {
    console.log("Backend is running at port 3000");
})
import express from "express";
import authRoutes from "./routes/auth-routes"
const app = express();

app.use("/api/v1/auth", authRoutes)

app.listen(3000, () => {
    console.log("Backend is running at port 3000");
})
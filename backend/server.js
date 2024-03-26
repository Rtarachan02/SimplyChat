// const express = require("express");
// const dotenv = require("dotenv");
import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
const app = express();
const PORT = process.env.PORT || 5000
dotenv.config();
app.use(express.json());//to parse the incoming request from json payloads(from req.body)
app.use(cookieParser());
app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);//access the user route
// app.get("/",(req,res) => {
//   res.send("Hello World!Tarachand Rana");
// });
app.listen(PORT,() => {
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`);//ctrl x the readd after curly brace
});
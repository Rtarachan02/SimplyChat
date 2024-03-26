import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";
const router = express.Router();

router.post("/signup",signup );//get will be convert to post to use api

router.post("/login",login);

 router.post("/logout",logout);
export default router;

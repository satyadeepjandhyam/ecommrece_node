import { Router } from "express";
import { getUser } from "../controller/userController.mjs";

export const userRouter=Router();

userRouter.get('/user',getUser)
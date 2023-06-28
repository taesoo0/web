import express from "express";
import { insert, edit, remove } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/insert", insert);

userRouter.get("/edit", edit);

userRouter.get("/remove", remove);

export default userRouter;

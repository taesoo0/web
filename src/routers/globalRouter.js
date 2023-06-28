import express from "express";
import { home } from "../controllers/productController";
import { login } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get("/", home);

globalRouter.get("/login", login);

export default globalRouter;

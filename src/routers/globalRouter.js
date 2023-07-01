import express from "express";
import { main } from "../controllers/productController";
import { login, home } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get("/", home);

globalRouter.get("/main", main);

globalRouter.get("/login", login);

export default globalRouter;

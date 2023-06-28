import express from "express";
import { insert, edit, remove } from "../controllers/productController";

const productRouter = express.Router();

productRouter.get("/insert", insert);

productRouter.get("/:id/edit", edit);

productRouter.get("/:id/remove", remove);

export default productRouter;

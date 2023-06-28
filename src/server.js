import express from "express";
import morgan from "morgan";
import global from "./routers/globalRouter";
import user from "./routers/userRouter";
import product from "./routers/productRouter";
import example from "./routers/aoldRouter";

const app = express();

const port = 3000;

const logger = morgan("dev");
app.use(logger);

app.set("views", process.cwd() + "/src/views");
app.set("view engine", "pug");
app.use("/", global);
app.use("/user", user);
app.use("/product", product);
app.use("/old", example);

const serverController = (req, res) => {
  console.log(`Server is runnung port: ${port}`);
};

app.listen(port, serverController);

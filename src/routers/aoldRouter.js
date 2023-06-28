import express from "express";
import { old } from "../controllers/aexController";

// express 에서 제공하는 router 함수로 함수의 내부를 보면 next()함수가 포함되어져 있다.
//middleware로서 작용하는것을 알 수 있다.
const oldRouter = express.Router();

// 컨트롤러가 라우터에 있는것은 굉장히 비정상적이므로 옮겨주어 작성하는것이 좋다.
const oldController = (req, res) => {
  res.send("old style");
};

//라우터로 넘겨받은 url이 / ? + /old 일경우 실행되는 함수
oldRouter.get("/old", old);

//url params값을 변수로 지정해 주고 싶을때 :(name)을 사용하여 변수로 지정해 줄 수있다.
//express는 정규식을 사용할 수 있다. 코드 순서에 따라 작동이 안되는 함수가 있을 수 있으니 순서에 주의할 것.
oldRouter.get("/:id(\\d+)/old", oldController);

//export와 export default의 차이점은 default값이 들어가면 항상 같은 함수를 보고있으므로, 변수명이 바뀌어도 상관없지만
//export는 정확한 이름을 사용해주어야 한다.
export default oldRouter;

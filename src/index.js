import express from "express"; //node_module 안에 존재하는 express 모듈을 찾아와준다.
import morgarn from "morgan"; // morgan > middleware를 사용하기 편하기 만든 라이브러리

const app = express(); // express 모듈을 사용하기 위한 규칙.

const logger = morgarn("dev"); //

const port = 3000; //server를 listen하기위한 포트값을 지정해줬다. 포트는 문이라고 생각

//midleware 함수 지정 get이나 post등 http 컨트롤러를 호출하기 전에 사용된다. 사용방법은 두가지로 use()함수에 넣어서 사용하거나
//get 메서드 안에서 사용 get('/',middleware,controller) 할 수 있으며, 인터프리터 언어이기 떄문에 순서에 주의해서 사용해야한다.
//마지막에 next()함수를 사용해주지 않으면 다음함수로 넘어가지 않으니 반드시 넣어주어야 한다.
const checku = (req, res, next) => {
  console.log(`${req.method} : ${req.url}`);
  next();
};

//middleware 함수 사용
app.use(checku); // 함수로 직접 구현
app.use(logger); // 라이브러리 사용

//컨트롤러 브라우저에서 받은 req, res 등을 컨트롤해주는 함수.
//반드시 res값을 던져주어야 한다. 브라우저는 req를 던지고 res를 기다리고 있으므로, res값을 넘겨주지 않으면 계속 로딩하며 기다린다.
const main = (req, res) => {
  return res.send("이곳이 페이지의 시작");
};

//express 의 get 메서드를 사용하여, 브라우저에서 앞에서 지정해준 포트를 타고 넘어온 url을 받아서 뒤의 callback함수를 실행해준다.
//앞서 middleware값을 지나, req의 메서드가 get인 url의 기본 /(root)값인 요청을 받으면 실행되는 함수.
app.get("/", main);

const userLogin = (req, res) => {
  return res.send("유저 로그인 페이지입니다.");
};

app.get("/login", userLogin);

//서버를 지정해준 포트로 열어주는 함수, 서버가 열리지 않으면 어떤 주소 값도 listen 할 수 없다.
app.listen(port);

//코드를 우선 작성한뒤에 정리해주는 작업 필요 정리된 파일은 server.js로 만들어줬다.

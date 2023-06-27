import exporess from "express";

const app = exporess();

const port = 3000;

app.get("/", (req, res) => {
  res.send("서버가 열려있습니다.");
});

const userLogin = (req, res) => {
  return res.send("유저 로그인 페이지입니다.");
};

app.get("/login", userLogin);

app.listen(port);

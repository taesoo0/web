//브라우저에 단순한 Text가 아니라 html을 전송하려면 단순하게 response 에 html을 실어서 보내주는 방법이 있고,
export const old = (req, res) => {
  return res.send(
    "<!DOCTYPE html><html lang='ko'><head><title>webapp</title></head><body><h1>thid is html tag</h1><footer>&copy;footer div</footer></body></html>"
  );
};

//다른 방법으로는 pug를 사용하는 방법이 있다. 페이지를 렌더링 시키준다는 함수를 사용하며,
//프로젝트에서 view를 어떤식으로 사용할지를 미리 설정해주어야 한다.(우선은 server에서 설정해주었다.)
export const expug = (req, res) => res.render("Main", { pageTitle: "Main" });

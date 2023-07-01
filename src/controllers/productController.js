const product = [
  {
    title: "가전제품",
    name: "TV",
    price: 50000,
    content: "가전은 LG",
  },
  {
    title: "장식품",
    name: "뤼비똥 의자",
    price: 300000,
    content: "사치품",
  },
  {
    title: "생필품",
    name: "옷, 쌀, 집",
    price: 10000,
    content: "의, 식, 주",
  },
];

export const main = (req, res) =>
  res.render("main", { pageTitle: "Main", product: product });

export const insert = (req, res) => res.send("Product insert");

export const edit = (req, res) => res.send("Product edit");

export const remove = (req, res) => res.send("Product remove");

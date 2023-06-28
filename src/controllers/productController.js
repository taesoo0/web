export const home = (req, res) => res.render("main", { pageTitle: "Main" });

export const insert = (req, res) => res.send("Product insert");

export const edit = (req, res) => res.send("Product edit");

export const remove = (req, res) => res.send("Product remove");

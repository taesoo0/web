const Auth = {
  username: "Taesu",
  loggedIn: false,
};

export const home = (req, res) =>
  res.render("home", { pageTitle: "Home", Auth: Auth });

export const login = (req, res) => res.send("user login");

export const insert = (req, res) => res.send("User insert");

export const edit = (req, res) => res.send("User edit");

export const remove = (req, res) => res.send("User remove");

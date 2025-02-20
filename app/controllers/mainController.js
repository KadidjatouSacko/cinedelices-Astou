export const mainController = {
  renderHomePage(req, res) {
    const css = "home";
    const title = "Accueil";
    const js = "index"
    res.render("home", { css, title, js });
  },
};

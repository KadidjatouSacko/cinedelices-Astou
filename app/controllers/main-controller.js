

export const mainController = {
    renderHomePage(req, res) {
        const css = "home";
        const js = "index";
        res.render("home", { css, js });
    }
}
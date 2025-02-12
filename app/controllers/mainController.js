

export const mainController = {
    renderHomePage(req, res) {
        const css = "home";
        res.render("home", { css });
    },
    
}


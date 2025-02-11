export const recipesController = {
    renderRecipePage(req, res) {
        const css = "recipe";
        const js = "index";
        res.render("recipes", { css, js });
    }
}
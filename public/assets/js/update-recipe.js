// Delete information des recettes
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".delete-btn").forEach(button => {
        button.addEventListener("click", (event) => {
            const index = event.target.dataset.index;
            const type = event.target.dataset.type;
            const listItem = event.target.closest("li") || event.target.closest(".step");

            if (listItem) {
                listItem.remove();
                console.log(`Élément supprimé : ${type} ${index}`);
            }
        });
    })
});
export function isAdminMiddleware(req, res, next) {
    // si je suis là c'est l'utilisateur est connecté
    // je veux juste vérifier si c'est un admin
    if (req.user.role !== "admin") {
        return res.status(403).send("Il faut etre un admin pour acceder a cette ressource...");
    };

    next();
};
export function isLoggedMiddleware(req, res, next) {
    // si j'ai un utilisateur connecté
    if (!req.session.userId) {
        return res.status(401).send("Il faut etre connecté pour acceder a cette ressource");
    };

    next();
};
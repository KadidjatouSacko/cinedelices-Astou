import { User } from "../models/index.js";

export async function authMiddleware(req, res, next) {
    if (req.session.userId) {
        try {
            const user = await User.findByPk(req.session.userId);

            if (user) {
                req.user = user;
                res.locals.user = user; // pour avoir `user` dans EJS
            }
        } catch (error) {
            console.error("Erreur authMiddleware:", error);
        }
    } else {
        res.locals.user = null; // 💡 Pour éviter une erreur si `user` n'est pas défini
    }
    // console.log("Middleware Auth exécuté - User:", req.user);   
    next();
};

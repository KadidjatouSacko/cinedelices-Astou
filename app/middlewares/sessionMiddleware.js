import session from "express-session";

export const sessionMiddleware = session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { 
        secure: false, // si https = true, si http = false
        maxAge: 1000 * 60 * 60, // durée du vie du cookie en ms (ici 1h)
    }
});
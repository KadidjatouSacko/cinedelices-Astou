import "dotenv/config";
import express from "express";
import session from "express-session";
import { router } from "./app/router.js";

const app = express();

app.use(session({
  secret: 'mon_super_truc_cache',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

app.set("view engine", "ejs");

app.set("views", "./app/views");

app.use(express.static("./public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server started on http://localhost:${PORT}`);    
})
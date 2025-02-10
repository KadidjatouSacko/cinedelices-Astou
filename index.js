import "dotenv/config";
import express from "express";
import { router } from "./app/rooter.js";

const app = express();

app.set("view engine", "ejs");

app.set("views", "./app/views");

app.use(express.static("./public"));

app.use(express.json());

app.use(router);

const PORT = process.env.PORT || 3030.
app.listen(PORT, () => {
    console.log(`🚀 Server started on http://localhost:${PORT}`);    
});


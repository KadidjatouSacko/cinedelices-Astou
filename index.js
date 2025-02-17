import "dotenv/config";
import express from "express";
import { router } from "./app/router.js";
import multer from 'multer';
const upload = multer({ dest: './public/assets/img' }); 


const app = express();

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
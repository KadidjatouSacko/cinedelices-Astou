import "dotenv/config";
import express from "express";
import { router } from "./app/router.js";
//import multer from "multer";
//import path from "path";
// https://www.youtube.com/watch?v=-rJOt4hoVak : tuto multer en français
// const storage = multer.diskStorage({
//     destination: path.join(__dirname, 'public', 'assets', 'img'),
//     filename: (req, file, callBack) => {
//         callBack(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
//     }
// })

// const upload = multer({
//     storage: storage,
// }).single('image');

// app.post('/recette/ajouter', (req, res) => {
//     upload(req, res, err) => {
//         if(err) {
//             res.render('error', {
//                 error: err
//             })
//         } else {
//             console.log(req.file);
            
//         }
//     }
// })
// { 
   
//     fileFilter: fileFilter,
//     limits: {
//         fileSize: 5 * 1024 * 1024 // Limite à 5MB
//     }
//     }); // Configure multer ici si nécessaire

//export default upload;



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
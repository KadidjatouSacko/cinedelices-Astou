import "dotenv/config";
import express from "express";
import { router } from "./app/router.js";
import multer from "multer";

const upload = multer(multer({ 
    storage: storage,
    fileFilter: fileFilter,
    limits: {
    fileSize: 5 * 1024 * 1024 // Limite à 5MB
    }
    })
); // Configure multer ici si nécessaire

export default upload;

// // Définir la configuration du stockage
// const storage = multer.diskStorage({
//     // Définir la destination de sauvegarde des fichiers
//     destination: function (req, file, cb) {
//       cb(null, './public/assets/img') // Assurez-vous que ce dossier existe
//     },
//       // Définir le nom du fichier
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//     cb(null, uniqueSuffix + '-' + file.originalname)
//   }
// });

// const fileFilter = (req, file, cb) => {
//     if (file.mimetype.startsWith('image/')) {
//       cb(null, true)
//     } else {
//       cb(new Error('Le fichier doit être une image!'), false)
//     }
//   };

//   // Créer l'instance multer
// const upload = multer({ 
//     storage: storage,
//     fileFilter: fileFilter,
//     limits: {
//       fileSize: 5 * 1024 * 1024 // Limite à 5MB
//     }
//   });

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
//import upload from "../../index.js";
import slugify from 'slugify';
// import {recipes} from "../../data/data.js"

import { Genre, Recipe, Ingredient, Movie, Difficulty, Category, Tool, Step, User, Price, Recipe_Ingredient, Recipe_Tool} from "../models/index.js";
import { sequelize } from '../models/sequelizeClient.js';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

function generateSlug(name) {
  return slugify(name, {
      lower: true,
      strict: true, // Supprime les caractères spéciaux
      trim: true
  });
}



// Configuration de multer pour l'upload des images
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    const uploadDir = path.join(__dirname, '../public/img/recipes');
    
    // Créer le répertoire s'il n'existe pas
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    
    cb(null, uploadDir);
  },
  filename: function(req, file, cb) {
    // Générer un nom de fichier unique avec timestamp
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, 'recipe-' + uniqueSuffix + ext);
  }
});

// Filtre pour les types de fichiers acceptés
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
  
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Type de fichier non supporté. Utilisez JPG, PNG, GIF ou WebP.'), false);
  }
};

const upload = multer({ 
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5 MB max
  },
  fileFilter: fileFilter
});

export const recipesController = {


  // GetOneRecipe(req, res) {
  //   const recipeName = req.params.name.toLowerCase();
  //   const recipe = recipes.find(r => r.name.toLowerCase() === recipeName);
  //   res.render("recipe", { recipe })
  // },

  async RenderAddRecipePage(req, res) {
    try {
      // Récupérer toutes les données nécessaires pour le formulaire
      const filmId = req.params.filmId || req.query.filmId || req.query.movie_id;
      const css = "formRecipe";
      const js = "form";
      const title = "Ajouter une recette";
  
      // Récupérer toutes les données nécessaires pour le formulaire
      const categories = await Category.findAll();
      const prices = await Price.findAll();
      const ingredients = await Ingredient.findAll();
      const tools = await Tool.findAll();
      const difficulties = await Difficulty.findAll();
      const recipe = await Recipe.findAll()
  
      // Vérifier si le film existe déjà, sinon le créer
      let movie = null;
      if (filmId) {
        movie = await Movie.findOne({ 
          where: { 
            [Op.or]: [
              { id: filmId },
              { tmdb_id: filmId }
            ]
          } 
        });
  
        if (!movie) {
          const movieData = await fetch(`https://api.themoviedb.org/3/movie/${filmId}?language=fr-FR`, {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTVhNjg3NTNjMzBkODAzNDcxNDhlMzQxNWU5MTUxNiIsIm5iZiI6MTc0MTM1NDU4Ni4yNDMsInN1YiI6IjY3Y2FmNjVhZjcwODQ0MDMzNmNiNmE0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JsQnyyscTJZDonfSCsLDjLq0qxz3jeGvg933F6vBJzs'
            }
          })
          .then(res => res.json());
  
          const newMovieData = {
            title: movieData.title,
            year: movieData.release_date ? new Date(movieData.release_date).getFullYear() : null,
            tmdb_id: filmId,
            slug: generateSlug(movieData.title)
          };
          
          movie = await Movie.create(newMovieData);
          
          // Ajouter les genres si disponibles
          if (movieData.genres && movieData.genres.length > 0) {
            const genreIds = movieData.genres.map(genre => genre.id);
            await movie.addGenres(genreIds);
          }
        }
      }
  
      // Passer toutes les données nécessaires à la vue
      res.render("form-recipe", { 
        css, 
        title, 
        js, 
        filmId: movie ? movie.id : null,
        categories,
        prices,
        ingredients,
        tools,
        difficulties
      });
    } catch (error) {
      console.error("Erreur lors du chargement de la page d'ajout de recette:", error);
      res.status(500).send("Erreur serveur: " + error.message);
    }
  },



  async GetAllRecipes(req, res) {
    
    try {
        const css = 'recipes';
        const js = "index";
        const title = "Page des recettes";
        const { difficulty, genre, price, search, category } = req.query;

        let recipes = await Recipe.findAll({
            include: [
                { model: Movie, as: "movie" },
                { model: Difficulty, as: "difficulty" },
                { model: Category, as: "category" },
                { model: Price, as: "price" },
                { model: User, as: "user" } 

            ]
        });

        if (difficulty) {
            recipes = recipes.filter(recipe => recipe.difficulty.name === difficulty);
        }

        if (category) {
            recipes = recipes.filter(recipe => recipe.category.name === category);
        }

        if (price) {
            recipes = recipes.filter(recipe => recipe.price.name === price); 
        }

        if (search) {
          const searchLower = search.toLowerCase();
          recipes = recipes.filter(recipe =>
              recipe.name.toLowerCase().includes(searchLower) ||
              recipe.movie.title.toLowerCase().includes(searchLower) || 
              recipe.category.name.toLowerCase().includes(searchLower) || 
              recipe.difficulty.name.toLowerCase().includes(searchLower) || 
              recipe.user.pseudo.toLowerCase().includes(searchLower) 
          );
      }

        const genres = await Genre.findAll();
        const prices = await Price.findAll();
        const categories = await Category.findAll(); 

        res.render("recipes", {
            title,
            css,
            js,
            recipes,
            genres,
            prices,
            categories, 
            difficulty,
            selectedCategory: category, 
            selectedGenre: genre,
            selectedPrice: price, 
            search
        });

    } catch (error) {
        console.error("Erreur lors de la récupération des recettes :", error);
        res.status(500).send("Erreur serveur");
    }
},


async GetOneRecipe(req, res) {
  try {
    const recipeSlug = req.params.slug;
    
    const recipe = await Recipe.findOne({
        where: { slug: recipeSlug },
        include: [
            { model: Movie, as: "movie" },
            { model: Difficulty, as: "difficulty" },
            { model: Category, as: "category" },
            { model: Price, as: "price" },
            { model: User, as: "user" },
            { model: Tool, as: "tools", through: { attributes: [] } },
            { 
                model: Ingredient, 
                as: "ingredients", 
                through: { 
                    attributes: ["quantity", "unity"],
                    as: "recipe_has_ingredient"
                }
            },
            { model: Step, as: "steps" }
        ]
    });
    
    if (!recipe) {
        return res.status(404).send("Recette non trouvée");
    }
    
    // Fonction pour nettoyer le titre du film
    const sanitizeFilename = (title) => {
        return title.toLowerCase()
                    .replace(/\s+/g, '-')
                    .replace(/[éèê]/g, 'e')
                    .replace(/[àâ]/g, 'a')
                    .replace(/[ùü]/g, 'u')
                    .replace(/[ô]/g, 'o')
                    .replace(/[^a-z0-9-]/g, '');
    };
    
    // Nettoyage du nom d'image si `recipe.movie` existe
    if (recipe.movie && recipe.movie.title) {
        recipe.movie.image = sanitizeFilename(recipe.movie.title);
    } else {
        recipe.movie.image = "default-image";
    }
    
    // Debug : afficher la structure des données
    console.log("Recipe data:", JSON.stringify(recipe, null, 2));
    
    // Rendre la vue avec recipe et user
    res.render("recipe", { recipe, user: req.user || null });
    
} catch (error) {
    console.error("Erreur lors de la récupération de la recette :", error);
    res.status(500).send("Erreur serveur");
}
},


  async RenderFilmSelectPage(req, res) {
    // console.log('youhouuuuu');
    const css = "formMovie";
    const js = "form";
    const title = "Ajouter une recette - relier un film à votre recette ";
    const movies = await fetch('https://api.themoviedb.org/3/discover/movie?append_to_response=images&include_adult=false&include_video=false&language=fr&page=1&sort_by=popularity.desc', {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTVhNjg3NTNjMzBkODAzNDcxNDhlMzQxNWU5MTUxNiIsIm5iZiI6MTc0MTM1NDU4Ni4yNDMsInN1YiI6IjY3Y2FmNjVhZjcwODQ0MDMzNmNiNmE0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JsQnyyscTJZDonfSCsLDjLq0qxz3jeGvg933F6vBJzs'
      }
    })
      .then(res => res.json())
    const moviesTreated = [];

    if (movies && movies.results) { 
    movies.results.forEach(movie => {
      const movieTreated = { id: movie.id, title: movie.title, image: `https://image.tmdb.org/t/p/w300${movie.poster_path}`, year: movie.release_date }
      moviesTreated.push(movieTreated);
    });;
    }  else {
   console.error("Erreur : movies.results est undefined ou vide !");
    }
    console.log("Réponse de TMDb :", movies);  // Ajout pour voir le résultat

    // const poster = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/images`)

    const message = "Aucun film trouvé"
    res.render("form-movie", { css, title, js, moviesTreated, message })
  },

  async RenderAddRecipePage(req, res) {
    try {
        const filmId = req.query.movie_id;
        const css = "formRecipe";
        const title = "Ajouter une recette";
        const js = "form";

        // Récupérer toutes les données nécessaires pour le formulaire
        const categories = await Category.findAll();
        const prices = await Price.findAll();
        const ingredients = await Ingredient.findAll();
        const tools = await Tool.findAll();
        const difficulties = await Difficulty.findAll();

        let movie = await Movie.findOne({ where: { tmdb_id: filmId } });
        if (!movie) {
            const movieData = await fetch(`https://api.themoviedb.org/3/movie/${filmId}?language=fr-FR`, {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTVhNjg3NTNjMzBkODAzNDcxNDhlMzQxNWU5MTUxNiIsIm5iZiI6MTc0MTM1NDU4Ni4yNDMsInN1YiI6IjY3Y2FmNjVhZjcwODQ0MDMzNmNiNmE0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JsQnyyscTJZDonfSCsLDjLq0qxz3jeGvg933F6vBJzs'
                }
            })
            .then(res => res.json());

            const newMovieData = {
                title: movieData.title,
                year: movieData.release_date,
                tmdb_id: filmId,
                slug: generateSlug(movieData.title) 
            };
            
            movie = await Movie.create(newMovieData);
            movieData.genres.forEach(genre => {
                movie.addGenre(genre.id);
            });
        }

        // Vérifiez que votre middleware de session fonctionne
console.log('Session middleware actif ?', req.session);

// Vérifiez que multer fonctionne
console.log('Multer actif ?', req.file);

// Vérifiez vos modèles
console.log('Modèles disponibles ?', { Recipe, Step, Recipe_Ingredient, Recipe_Tool });

        // Passer toutes les données nécessaires à la vue
        res.render("form-recipe", { 
            css, 
            title, 
            js, 
            filmId: movie.id,
            categories,
            prices,
            ingredients,
            tools,
            difficulties
        });
    } catch (error) {
        console.error("Erreur lors du chargement de la page d'ajout de recette:", error);
        res.status(500).send("Erreur serveur: " + error.message);
    }
},

  async showAddRecipeForm(req, res, next) {
    try {
        if (!req.session.userId) {
            throw new Error("Aucun utilisateur connecté.");
        }

        const ingredients = await Ingredient.findAll();
        const tools = await Tool.findAll(); // 🔹 Ustensiles récupérés depuis la BDD

        res.render("form-recipe", { ingredients, tools, filmId: req.query.filmId });
    } catch (err) {
        console.error("Erreur lors de l'affichage du formulaire :", err);
        next(err);
    }
  },

  async AddOneRecipe(req, res) {
    const {
      name,
      description,
      duration,
      difficulty,
      category,
      price,
      film_id,
      video,
      steps,
      ingredientIds = [],
      quantities = [],
      units = [],
      tools = [],
      newIngredients = [],
      newQuantities = [],
      newUnits = [],
      newTools = []
    } = req.body;

    if (!req.session.user) {
      return res.status(401).json({ error: 'Vous devez être connecté pour ajouter une recette' });
    }

    const slug = generateSlug(name); // Utiliser votre fonction existante

    let imagePath = null;
    if (req.file) {
      // Utiliser le nom de fichier généré par multer
      imagePath = `/img/recipes/${req.file.filename}`;
    }

    const t = await sequelize.transaction();

    try {
      const recipe = await Recipe.create({
        name,
        slug,
        description,
        duration: parseInt(duration),
        image: imagePath,
        video,
        user_id: req.session.user.id,
        difficulty_id: difficulty,
        category_id: category,
        price_id: price,
        movie_id: film_id
      }, { transaction: t });

      // Étapes
      if (Array.isArray(steps)) {
        for (let i = 0; i < steps.length; i++) {
          if (steps[i] && steps[i].trim()) {
            await Step.create({
              recipe_id: recipe.id,
              step_number: i + 1,
              instruction: steps[i].trim() // Utiliser 'instruction' au lieu de 'description'
            }, { transaction: t });
          }
        }
      }

      // Ingrédients existants
      for (let i = 0; i < ingredientIds.length; i++) {
        if (ingredientIds[i] && quantities[i]) {
          await Recipe_Ingredient.create({
            recipe_id: recipe.id,
            ingredient_id: ingredientIds[i],
            quantity: parseFloat(quantities[i]),
            unity: units[i] || ''
          }, { transaction: t });
        }
      }

      // Nouveaux ingrédients
      for (let i = 0; i < newIngredients.length; i++) {
        if (newIngredients[i] && newIngredients[i].trim() && newQuantities[i]) {
          const newIngredient = await Ingredient.create({ 
            name: newIngredients[i].trim() 
          }, { transaction: t });

          await Recipe_Ingredient.create({
            recipe_id: recipe.id,
            ingredient_id: newIngredient.id,
            quantity: parseFloat(newQuantities[i]),
            unity: newUnits[i] || ''
          }, { transaction: t });
        }
      }

      // Ustensiles existants
      if (Array.isArray(tools)) {
        for (const toolId of tools) {
          if (toolId) {
            await Recipe_Tool.create({
              recipe_id: recipe.id,
              tool_id: toolId
            }, { transaction: t });
          }
        }
      }

      // Nouveaux ustensiles
      if (Array.isArray(newTools)) {
        for (const newToolName of newTools) {
          if (newToolName && newToolName.trim()) {
            const newTool = await Tool.create({ 
              name: newToolName.trim() 
            }, { transaction: t });

            await Recipe_Tool.create({
              recipe_id: recipe.id,
              tool_id: newTool.id
            }, { transaction: t });
          }
        }
      }

      await t.commit();
      return res.redirect(`/recettes/${slug}`);
      
    } catch (error) {
      await t.rollback();
      console.error('Erreur lors de l\'ajout de la recette:', error);

      // Recharger les données nécessaires au formulaire
      const [categories, prices, ingredients, tools, difficulties] = await Promise.all([
        Category.findAll({ order: [['name', 'ASC']] }),
        Price.findAll({ order: [['id', 'ASC']] }),
        Ingredient.findAll({ order: [['name', 'ASC']] }),
        Tool.findAll({ order: [['name', 'ASC']] }),
        Difficulty.findAll({ order: [['id', 'ASC']] })
      ]);

      

      return res.render('form-recipe', { // Corriger le nom de la vue
        css: 'formRecipe',
        js: 'form',
        title: 'Ajouter une recette',
        categories,
        prices,
        ingredients,
        tools,
        difficulties,
        filmId: film_id,
        error: 'Une erreur est survenue lors de l\'ajout de la recette',
        formData: req.body
      });
    }
  },
      
  


  async validateInsert(req, res) {


    const recipes = await Recipe.findAll()
    console.log(recipes);

    res.redirect("/recettes")
  }, 

  async deleteRecipe(req, res) {
    try {
        const slug = req.params.slug;

        const recipe = await Recipe.findOne({ where: { slug: slug } });
        if (!recipe) {
            return res.status(404).send("Cette recette n'existe pas...");
        }
        await Step.destroy({ where: { recipe_id: recipe.id } });

        await Recipe_Ingredient.destroy({ where: { recipe_id: recipe.id } });
        await Recipe_Tool.destroy({ where: { recipe_id: recipe.id } });

        await Recipe.destroy({ where: { slug: slug } });

        res.redirect("/Recettes");
    } catch (error) {
        // Gestion des erreurs : envoyer une réponse appropriée
        console.error("Erreur lors de la suppression de la recette:", error);
        res.status(500).send("Erreur interne lors de la suppression de la recette.");
    }
},

//   async RenderUpdateRecipePage(req, res) {
//     try {
//         const css = 'update-recipe';
//         const js = 'update-recipe';
//         const title = 'Modifier la recette';
//         const recipeSlug = req.params.slug;

//         const recipe = await Recipe.findOne({
//             where: { slug: recipeSlug },
//             include: [
//                 { model: Category, as: "category" },
//                 { model: Price, as: "price" },
//                 { model: Difficulty, as: "difficulty" },
//                 { model: User, as: "user" },
//                 { model: Tool, as: "tools" },
//                 { model: Ingredient, as: "ingredients" },
//                 { model: Step, as: "steps" }
//             ]
//         });

//         if (!recipe) {
//             return res.status(404).send("Recette non trouvée");
//         }

//         // Vérifier si une image est déjà présente
//         const existingImage = recipe.image ? recipe.image : null;

//         res.render("update-recipe", { css, js, title, recipe, existingImage });
//     } catch (err) {
//         console.log(err);
//         res.status(500).send("Erreur serveur");
//     }
// }

// Dans votre contrôleur de recettes

async updateRecipe(req, res) {
  const transaction = await sequelize.transaction();
  
  try {
      const recipeSlug = req.params.slug;
      const {
          name,
          description,
          duration,
          tools,
          ingredients,
          steps
      } = req.body;

      // Trouver la recette existante
      const recipe = await Recipe.findOne({
          where: { slug: recipeSlug },
          include: [
              { model: Tool, as: "tools" },
              { model: Ingredient, as: "ingredients" },
              { model: Step, as: "steps" }
          ]
      }, { transaction });

      if (!recipe) {
          await transaction.rollback();
          return res.status(404).send("Recette non trouvée");
      }

      // Générer un nouveau slug si le nom a changé
      let newSlug = recipe.slug;
      if (name !== recipe.name) {
          newSlug = name.toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/^-+|-+$/g, '');
      }

      // Gérer l'upload d'image
      let imagePath = recipe.image;
      if (req.file) {
          imagePath = `/uploads/${req.file.filename}`;
          
          // Supprimer l'ancienne image si elle existe
          if (recipe.image && recipe.image !== imagePath) {
              const fs = require('fs');
              const path = require('path');
              const oldImagePath = path.join(__dirname, '..', 'public', recipe.image);
              if (fs.existsSync(oldImagePath)) {
                  fs.unlinkSync(oldImagePath);
              }
          }
      }

      // Mettre à jour les informations de base de la recette
      await recipe.update({
          name,
          slug: newSlug,
          description,
          duration: parseInt(duration),
          image: imagePath
      }, { transaction });

      // === GESTION DES USTENSILES ===
      // Supprimer les anciennes associations
      await Recipe_Tool.destroy({
          where: { recipe_id: recipe.id }
      }, { transaction });

      // Traiter les ustensiles
      if (tools && Array.isArray(tools)) {
          for (const toolData of tools) {
              if (toolData.name && toolData.name.trim()) {
                  // Chercher ou créer l'ustensile
                  let tool = await Tool.findOne({
                      where: { name: toolData.name.trim() }
                  }, { transaction });

                  if (!tool) {
                      tool = await Tool.create({
                          name: toolData.name.trim(),
                          quantity: parseInt(toolData.quantity) || 1
                      }, { transaction });
                  }

                  // Créer l'association
                  await Recipe_Tool.create({
                      recipe_id: recipe.id,
                      tool_id: tool.id
                  }, { transaction });
              }
          }
      }

      // === GESTION DES INGRÉDIENTS ===
      // Supprimer les anciennes associations
      await Recipe_Ingredient.destroy({
          where: { recipe_id: recipe.id }
      }, { transaction });

      // Traiter les ingrédients
      if (ingredients && Array.isArray(ingredients)) {
          for (const ingredientData of ingredients) {
              if (ingredientData.name && ingredientData.name.trim()) {
                  // Chercher ou créer l'ingrédient
                  let ingredient = await Ingredient.findOne({
                      where: { name: ingredientData.name.trim() }
                  }, { transaction });

                  if (!ingredient) {
                      ingredient = await Ingredient.create({
                          name: ingredientData.name.trim()
                      }, { transaction });
                  }

                  // Créer l'association avec quantité et unité
                  await Recipe_Ingredient.create({
                      recipe_id: recipe.id,
                      ingredient_id: ingredient.id,
                      quantity: parseFloat(ingredientData.quantity),
                      unity: ingredientData.unity.trim()
                  }, { transaction });
              }
          }
      }

      // === GESTION DES ÉTAPES ===
      // Supprimer les anciennes étapes
      await Step.destroy({
          where: { recipe_id: recipe.id }
      }, { transaction });

      // Créer les nouvelles étapes
      if (steps && Array.isArray(steps)) {
          for (let i = 0; i < steps.length; i++) {
              const stepData = steps[i];
              if (stepData.title && stepData.instruction) {
                  await Step.create({
                      title: stepData.title.trim(),
                      instruction: stepData.instruction.trim(),
                      recipe_id: recipe.id
                  }, { transaction });
              }
          }
      }

      // Valider la transaction
      await transaction.commit();

      // Rediriger vers la page de la recette mise à jour
      res.redirect(`/recettes/${newSlug}`);

  } catch (error) {
      await transaction.rollback();
      console.error('Erreur lors de la mise à jour de la recette:', error);
      res.status(500).send("Erreur lors de la mise à jour de la recette");
  }
},

// Méthode pour rendre la page de modification (votre méthode existante améliorée)
async renderUpdateRecipePage(req, res) {
  try {
      const css = 'update-recipe';
      const js = 'update-recipe';
      const title = 'Modifier la recette';
      const recipeSlug = req.params.slug;

      const recipe = await Recipe.findOne({
          where: { slug: recipeSlug },
          include: [
              { model: Category, as: "category" },
              { model: Price, as: "price" },
              { model: Difficulty, as: "difficulty" },
              { model: User, as: "user" },
              { 
                  model: Tool, 
                  as: "tools",
                  through: { 
                      model: Recipe_Tool,
                      as: 'RecipeHasTool'
                  }
              },
              { 
                  model: Ingredient, 
                  as: "ingredients",
                  through: { 
                      model: Recipe_Ingredient,
                      as: 'RecipeHasIngredient'
                  }
              },
              { 
                  model: Step, 
                  as: "steps",
                  order: [['id', 'ASC']]
              }
          ]
      });

      if (!recipe) {
          return res.status(404).send("Recette non trouvée");
      }

      // Vérifier que l'utilisateur a le droit de modifier cette recette
      // (ajouter votre logique d'authentification ici)
      
      res.render("update-recipe", { 
          css, 
          js, 
          title, 
          recipe
      });
  } catch (err) {
      console.error('Erreur lors du rendu de la page de modification:', err);
      res.status(500).send("Erreur serveur");
  }
}

};
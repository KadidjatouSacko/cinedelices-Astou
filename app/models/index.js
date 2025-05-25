import { Category } from './Category.js';
import { Contact } from './Contact.js';
import { Difficulty } from './Difficulty.js';
import { Genre } from './Genre.js';  
import { Ingredient } from './Ingredient.js';
import { Movie_Genre } from './Movie_Genre.js';
import { Movie } from './Movie.js';
import { Price } from './Price.js';
import { Recipe_Ingredient } from './Recipe_Ingredient.js';
import { Recipe_Tool } from './Recipe_Tool.js';
import { Recipe } from './Recipe.js';
import { Step } from './Step.js';
import { Tool } from './Tool.js';
import { User } from './User.js';

// Associations entre les modèles

//Recipe - Difficulty
Difficulty.hasMany(Recipe, {
  foreignKey: 'difficulty_id',
});
Recipe.belongsTo(Difficulty, {
  foreignKey: 'difficulty_id',
  as: 'difficulty'
});

// Recipe - Category
Category.hasMany(Recipe, {
  foreignKey: 'category_id',
});
Recipe.belongsTo(Category, {
  foreignKey: 'category_id',
  as: 'category'
});

//Recipe - Price 
Price.hasMany(Recipe, {
  foreignKey: 'price_id',
  as: 'recipes'
});
Recipe.belongsTo(Price, {
  foreignKey: 'price_id',
  as: 'price'
});

//Recipe - Movie 
Movie.hasMany(Recipe, {
  foreignKey: 'movie_id',
});
Recipe.belongsTo(Movie, {
  foreignKey: 'movie_id',
  as: 'movie'
});

// Recette - Ingrédients
Ingredient.belongsToMany(Recipe, {
  through: Recipe_Ingredient,
  foreignKey: 'ingredient_id',
  otherKey: 'recipe_id',
  as: 'recipes',
  onDelete: 'CASCADE',
});
Recipe.belongsToMany(Ingredient, {
  through: Recipe_Ingredient,
  foreignKey: 'recipe_id',
  otherKey: 'ingredient_id',
  as: 'ingredients',
  onDelete: 'CASCADE',
});

// Recette - Tool
Tool.belongsToMany(Recipe, {
through: Recipe_Tool,
foreignKey: 'tool_id',
otherKey: 'recipe_id',
as: 'recipes',
onDelete: 'CASCADE',
});
Recipe.belongsToMany(Tool, {
through: Recipe_Tool,
foreignKey: 'recipe_id',
otherKey: 'tool_id',
as: 'tools',
onDelete: 'CASCADE',
});

//Movie - Genre
Genre.belongsToMany(Movie, {
  through: Movie_Genre
});
Movie.belongsToMany(Genre, {
  through: Movie_Genre
});

User.hasMany(Recipe, {
  foreignKey: 'user_id',
  as: 'recipes'
});
Recipe.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'user'
});

Recipe.hasMany(Step, {
  foreignKey: 'recipe_id',
  as: 'steps'
});
Step.belongsTo(Recipe, {
  foreignKey: 'recipe_id',
  as: 'recipe'
});

// Movie.belongsToMany(Recipe, {
//   through: MovieRecipe,  // Spécifier la table de liaison
//   foreignKey: 'movie_id',
//   as: 'recipes',  // Alias pour la relation
// });
// Recipe.belongsToMany(Movie, {
//   through: MovieRecipe,  // Spécifier la table de liaison
//   foreignKey: 'recipe_id',
//   as: 'movies',  // Alias pour la relation
// });


  // Recipe_Ingredient

export { User, Category, Difficulty, Ingredient, Genre, Movie, Recipe, Recipe_Ingredient, Price, Tool, Recipe_Tool, Step, Contact,  Movie_Genre };

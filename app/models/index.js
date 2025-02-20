import { Category } from './Category.js';
import { Difficulty } from './Difficulty.js';
import { Ingredient } from './Ingredient.js';
import { Recipe } from './Recipe.js';
import { Genre } from './Genre.js';  
import {Movie} from './Movie.js';

// Associations entre les modèles

Difficulty.hasMany(Recipe, {
  foreignKey: 'difficulty_id',
});
Recipe.belongsTo(Difficulty, {
  foreignKey: 'difficulty_id',
  as: 'difficulty'
});

Category.hasMany(Recipe, {
  foreignKey: 'category_id',
});
Recipe.belongsTo(Category, {
  foreignKey: 'category_id',
  as: 'category'
});

Movie.hasMany(Recipe, {
  foreignKey: 'movie_id',
});
Recipe.belongsTo(Movie, {
  foreignKey: 'movie_id',
  as: 'movie'
});

Genre.hasMany(Movie, {
    foreignKey: 'genre_id'
});
Movie.belongsTo(Genre, {
    foreignKey: 'genre_id',
    as: 'genre'
});

export { Category, Difficulty, Ingredient, Genre, Movie, Recipe };

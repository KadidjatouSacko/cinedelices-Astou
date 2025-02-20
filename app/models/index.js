import { Category } from './Category.js';
import { Difficulty } from './Difficulty.js';
import { Ingredient } from './Ingredient.js';
import { Movie } from './Movie.js';
import { Recipe } from './Recipe.js';
import { MovieCategory } from './MovieCategory.js'

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

export { Category, Difficulty, Ingredient, Movie, Recipe };
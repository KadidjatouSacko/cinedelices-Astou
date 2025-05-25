// models/movieRecipe.js
import { Model, DataTypes } from 'sequelize';
import { sequelize } from './sequelizeClient.js';

export class MovieRecipe extends Model {}

MovieRecipe.init(
  {
    movie_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'movie',  // nom de la table des films
        key: 'id',       // clé primaire de la table des films
      },
    },
    recipe_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'recipe',  // nom de la table des recettes
        key: 'id',        // clé primaire de la table des recettes
      },
    },
  },
  {
    sequelize,
    tableName: 'movie_recipe',  // nom de la table de liaison
  }
);

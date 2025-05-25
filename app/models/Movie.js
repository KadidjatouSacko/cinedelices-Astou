import {  Model,DataTypes } from 'sequelize';
import { sequelize } from './sequelizeClient.js';  

export class Movie extends Model { }

Movie.init ({
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  year: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  overview : {
    type: DataTypes.STRING,
    allowNull : true
  },

  tmdb_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false,  // Si tu veux qu'il soit obligatoire
    unique: true,  // Si tu veux qu'il soit unique
    validate: {
      notEmpty: true  // Vérifie qu'il n'est pas vide
    }
  } //
}, 
{
  sequelize,
  tableName: 'movie'
});

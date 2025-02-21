import {  Model,DataTypes } from 'sequelize';
import { sequelize } from './sequelizeClient.js';  

export class Movie extends Model { }

Movie.init ({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  year: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  tmdb_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, 
{
  sequelize,
  tableName: 'movie'
});
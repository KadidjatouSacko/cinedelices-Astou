import {  Model,DataTypes } from 'sequelize';
import { sequelize } from './sequelizeClient.js';  

export class Movie extends Model { }


Movie.init ({
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  genre_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'genre',
      key: 'id',
    },
  },
  year: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, 
{
    sequelize,
  tableName: 'movie'

});

Movie.belongsTo(Genre, { foreignKey: 'genre_id', as: 'genre' });  



import { Model, DataTypes } from 'sequelize';
import { sequelize } from './sequelizeClient.js'; 
import { Movie } from './Movie.js';
export class Genre extends Model { } 

Genre.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, 
  },
}, {
sequelize,
  tableName: 'genre',  
  
});

Movie.belongsToMany(Genre, { through: 'movie_has_genre', as: 'Genres' });




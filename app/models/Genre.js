import { Model, DataTypes } from 'sequelize';
import { sequelize } from './sequelizeClient.js'; 

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



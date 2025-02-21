import { Model, DataTypes } from 'sequelize';
import { sequelize } from './sequelizeClient.js'; 

export class Genre extends Model { } 

Genre.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, 
  },
}, {
sequelize,
  tableName: 'genre',  
  
});



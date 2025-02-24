import { Model, DataTypes } from 'sequelize';
import { sequelize } from './sequelizeClient.js'; 

export class Price extends Model { } 

Price.init({
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true
  }
}, {
  sequelize,
  tableName: 'price'
});

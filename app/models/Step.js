import {  Model,DataTypes } from 'sequelize';
import { sequelize } from './sequelizeClient.js';  

export class Step extends Model { }

Step.init({
  title: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  instruction: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      len: [2, 100]
    }
  }
}, {
  sequelize,
  tableName: 'step'
});
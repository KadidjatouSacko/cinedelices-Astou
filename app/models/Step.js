import {  Model,DataTypes } from 'sequelize';
import { sequelize } from './sequelizeClient.js';  

export class Step extends Model { }

Step.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  instruction: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true
  },
  recipe_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'recipe',
      key: 'id'
    }
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  sequelize,
  tableName: 'step',
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});
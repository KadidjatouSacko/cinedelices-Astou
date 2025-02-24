import { Model, DataTypes } from "sequelize";
import { sequelize } from "./sequelizeClient.js";

export class Tool extends Model { }

Tool.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true
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
  tableName: 'tool',
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

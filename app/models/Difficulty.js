import { Model, DataTypes } from "sequelize";
import { sequelize } from "./sequelizeClient.js"

export class Difficulty extends Model { }

Difficulty.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  label: {
    type: DataTypes.STRING, 
    allowNull: false,
    unique: true
  }
}, {
  sequelize,
  tableName: "difficulty"
});

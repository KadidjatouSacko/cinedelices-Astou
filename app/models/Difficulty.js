import { Model, DataTypes } from "sequelize";
import { sequelize } from "./sequelizeClient.js"

export class Difficulty extends Model { }

Difficulty.init({
  name: {
    type: DataTypes.TEXT, 
    allowNull: false,
    unique: true
  }
}, {
  sequelize,
  tableName: "difficulty"
});

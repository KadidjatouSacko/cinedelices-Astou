import { Model, DataTypes } from "sequelize";
import { sequelize } from "./sequelizeClient.js"

export class Ingredient extends Model { }

Ingredient.init({
  name: {
    type: DataTypes.TEXT, 
    allowNull: false,
    unique: true
  }
}, {
  sequelize,
  tableName: "ingredient"
});

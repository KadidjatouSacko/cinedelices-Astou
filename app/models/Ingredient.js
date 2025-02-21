import { Model, DataTypes } from "sequelize";
import { sequelize } from "./sequelizeClient.js"

export class Ingredient extends Model { }

Ingredient.init({
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
  tableName: "ingredient"
});

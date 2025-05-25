import { Model, DataTypes } from "sequelize";
import { sequelize } from "./sequelizeClient.js"
import slugify from "slugify";

export class Recipe extends Model { }

Recipe.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  slug :{
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  
  image: {
    type: DataTypes.STRING
  }, 
}, {
  sequelize,
  tableName: "recipe"
});
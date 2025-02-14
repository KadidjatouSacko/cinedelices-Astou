import { Model, DataTypes } from "sequelize";
import { sequelize } from "./sequelizeClient.js"

export class Recipe extends Model { }

Recipe.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    sequelize,
    tableName: "recipe"
});

//test

// const recipes = await Recipe.findAll();
// console.log(recipes);
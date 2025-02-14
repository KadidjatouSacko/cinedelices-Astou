import { Model, DataTypes } from "sequelize";
import { sequelize } from "./sequelizeClient.js"

export class Ingredient extends Model { }

Ingredient.init({
    category: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
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

//test
// const labels = await Ingredient.findAll();
// console.log(labels);
import { Model, DataTypes } from "sequelize";
import { sequelize } from "./sequelizeClient.js"

export class Movie extends Model { }

Movie.init({
    title: {
        type: DataTypes.STRING, 
        allowNull: false,
        unique: true
    },
    year: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
    }
}, {
    sequelize,
    tableName: "movie"
});

//test

const movies = await Movie.findAll();
console.log(movies);
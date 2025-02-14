import { Model, DataTypes } from "sequelize";
import { sequelize } from "./sequelizeClient.js"

export class Movie extends Model { }

Movie.init({
    title: {
        type: DataTypes.STRING, 
        allowNull: false
    },
    year: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    sequelize,
    tableName: "movie"
});

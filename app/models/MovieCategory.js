import { Model, DataTypes } from "sequelize";
import { sequelize } from "./sequelizeClient.js";

export class MovieCategory extends Model { }

MovieCategory.init({
    name: {
        type: DataTypes.STRING, 
        allowNull: false,
        unique: true
    }
}, {
    sequelize,
    tableName: "movieCategory"
});

export default MovieCategory;

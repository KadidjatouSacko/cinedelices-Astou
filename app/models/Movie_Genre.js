import { Model, DataTypes } from "sequelize";
import { sequelize } from "./sequelizeClient.js";

export class Movie_Genre extends Model { }

Movie_Genre.init({
}, {
  sequelize,
  tableName: "movie_has_genre"
});

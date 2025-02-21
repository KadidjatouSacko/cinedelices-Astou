import { Model, DataTypes } from "sequelize";
import { sequelize } from "./sequelizeClient.js"

export class Recipe extends Model { }

Recipe.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
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
  difficulty_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'difficulty',
      key: 'id'
    }
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'category',
      key: 'id'
    }
  },
  movie_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'movie',
      key: 'id'
    }
  }
}, {
  sequelize,
  tableName: "recipe"
});
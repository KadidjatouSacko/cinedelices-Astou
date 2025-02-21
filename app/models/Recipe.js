import { Model, DataTypes } from "sequelize";
import { sequelize } from "./sequelizeClient.js"

export class Recipe extends Model { }

Recipe.init({
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

// Définir les associations
Recipe.associate = (models) => {
  Recipe.belongsTo(models.Difficulty, {
    foreignKey: 'difficulty_id',
    as: 'difficulty'
  });
  
  Recipe.belongsTo(models.Category, {
    foreignKey: 'category_id',
    as: 'category'
  });
  
  Recipe.belongsTo(models.Movie, {
    foreignKey: 'movie_id',
    as: 'movie'
  });
};





// import { Model, DataTypes } from "sequelize";
// import { sequelize } from "./sequelizeClient.js"

// export class Recipe extends Model { }

// Recipe.init({
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   description: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   duration: {
//     type: DataTypes.INTEGER,
//     allowNull: false
//   },
//   image: {
//     type: DataTypes.STRING
//   },
// }, {
//   sequelize,
//   tableName: "recipe"
// });

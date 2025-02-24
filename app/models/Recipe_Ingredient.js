import  {Model, DataTypes}from 'sequelize'
import {sequelize} from './sequelizeClient.js'

export class Recipe_Ingredient extends Model { }

Recipe_Ingredient.init({
  quantity: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  unity: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  sequelize,
  tableName: 'recipe_has_ingredient',
  indexes: [
    {
      unique: true,
      fields: ['recipe_id', 'ingredient_id']
    }
  ]
});
  
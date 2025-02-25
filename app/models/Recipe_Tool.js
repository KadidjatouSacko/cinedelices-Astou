import  {Model, DataTypes}from 'sequelize'
import {sequelize} from './sequelizeClient.js'

export class Recipe_Tool extends Model { }

Recipe_Tool.init({
}, {
  sequelize,
  tableName: 'recipe_has_tool',
  indexes: [
    {
      unique: true,
      fields: ['recipe_id', 'tool_id']
    }
  ]
});

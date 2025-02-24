import  {Model, DataTypes}from 'sequelize'
import {sequelize} from './sequelizeClient.js'

export class Recipe_Ingredient extends Model { }


    Recipe_Ingredient = sequelize.define('Recipe_Ingredient', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      recipe_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'recipe',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      ingredient_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'ingredient',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      quantity: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      unity: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
      }
    }, {
      tableName: 'recipe_has_ingredient',
      timestamps: false, // Si vous gérez les timestamps manuellement
      indexes: [
        {
          unique: true,
          fields: ['recipe_id', 'ingredient_id']
        }
      ]
    });
  

  
    export default Recipe_Ingredient

  
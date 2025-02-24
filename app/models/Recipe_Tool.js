import  {Model, DataTypes}from 'sequelize'
import {sequelize} from './sequelizeClient.js'

export class Recipe_Tool extends Model { }


    Recipe_Tool = sequelize.define('Recipe_Tool', {
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
          model: 'tool',
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

      tableName: 'recipe_has_tool',
      timestamps: false,
      indexes: [
        {
          unique: true,
          fields: ['recipe_id', 'tool_id']
        }
      ]
    });

    export default Recipe_Tool
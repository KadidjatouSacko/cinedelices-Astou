import { Model, DataTypes } from "sequelize";
import { sequelize } from "./sequelizeClient.js";

export class Tool extends Model { }

Tool.init({
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true
  }
}, {
  sequelize,
  tableName: 'tool'
});

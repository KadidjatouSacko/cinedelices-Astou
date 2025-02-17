import { Model, DataTypes } from "sequelize";
import { sequelize } from "./sequelizeClient.js";
export class User extends Model { }
User.init(
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      }
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    firstname: {
      type: DataTypes.TEXT,
    },
    lastname: {
      type: DataTypes.TEXT,
    },
    role: {
      type: DataTypes.TEXT,
      defaultValue: "member",
    },
  },
  {
    sequelize,
    tableName: "user",
  }
);
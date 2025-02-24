import { Model, DataTypes } from "sequelize";

import { sequelize } from "./sequelizeClient.js"

export class User extends Model { }

User.init({
    pseudo: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    firstname: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    lastname: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    role: {
        type: DataTypes.TEXT,
        defaultValue: "member"
    }
}, {
    sequelize,
    tableName: "user"
});

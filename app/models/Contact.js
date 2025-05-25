import { Model, DataTypes } from 'sequelize';
import { sequelize } from './sequelizeClient.js';

export class Contact extends Model { }

Contact.init({
    pseudo: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    },
    // object: {
    //     type: DataTypes.TEXT,
    //     allowNull: false,
    //     unique: true
    // },
    text: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    }
}, {
    sequelize,
    tableName: 'contact'
});

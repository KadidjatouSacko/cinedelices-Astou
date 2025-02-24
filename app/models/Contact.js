import { Model, DataTypes } from 'sequelize';
import { sequelize } from './sequelizeClient.js';

export class Contact extends Model { }

Contact.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    sequelize,
    tableName: 'contact',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

export default Contact
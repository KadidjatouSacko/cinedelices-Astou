import { Model, DataTypes } from 'sequelize';
import { sequelize } from './sequelizeClient.js'; 

export class Price extends Model { } 

Price.init({
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
  tableName: 'price',
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});


export default Price
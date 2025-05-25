import { Model, DataTypes } from 'sequelize';
import { sequelize } from './sequelizeClient.js'; 

export class Price extends Model { } 

Price.init({
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true
  },
//   price_id: {
//     type: DataTypes.INTEGER,
//     allowNull: true,  // Permet des valeurs NULL
//     defaultValue: 1   // Valeur par défaut si nécessaire
// }

}, {
  sequelize,
  tableName: 'price'
});

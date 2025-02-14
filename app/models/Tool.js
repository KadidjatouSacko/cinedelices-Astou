import { Model, DataTypes} from "sequelize";
import { sequelize } from "./sequelizeClient.js"


export class Tool extends Model { }

Tool.init({
    name: {
        type: DataTypes.STRING, 
        allowNull: false,
        unique: true
    }, 
    category: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    }
}, {
    sequelize,
    tableName: "tool"
});

//test
// const tools = await Tool.findAll();
// console.log(tools);
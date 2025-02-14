import { Model, Datatypes } from "sequelize";
import { sequelize } from "./sequelizeClient.js";


export class Category extends Model { }

Category.init({
    name: {
        type: Datatypes.STRING, 
        allowNull: false,
        unique: true
    }
}, {
    sequelize,
    tableName: "category"
});

//test 

// const categories = await Category.findAll();
// console.log(levels);
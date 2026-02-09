import { DataTypes } from "sequelize";
import { sequelize } from "../index.js";

const Pizza = sequelize.define(
    "Pizza",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        pizza: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
    size: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    price: {
         type: DataTypes.DECIMAL(10,2),
        allowNull: true,
    },
        
    },{
        tableName: "Pizza",
        timestamps: false
    }

)

export { Pizza }
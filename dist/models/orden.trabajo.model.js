"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdenTrabajoModel = void 0;
const sequelize_1 = require("sequelize");
const database_config_1 = require("../database/database.config");
class OrdenTrabajoModel extends sequelize_1.Model {
}
exports.OrdenTrabajoModel = OrdenTrabajoModel;
OrdenTrabajoModel.init({
    idOrden: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true
    },
    trabajo: {
        type: sequelize_1.DataTypes.STRING(150),
        allowNull: false,
    },
    precio: {
        type: sequelize_1.DataTypes.STRING(150),
        allowNull: false,
    },
    idCliente: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    idElectrodomestico: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        unique: true
    }
}, {
    sequelize: database_config_1.sequelize,
    tableName: "orden_trabajo",
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientesModel = void 0;
const sequelize_1 = require("sequelize");
const database_config_1 = require("../database/database.config");
const electrodomesticos_model_1 = require("./electrodomesticos.model");
class ClientesModel extends sequelize_1.Model {
}
exports.ClientesModel = ClientesModel;
ClientesModel.init({
    idCliente: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING(25),
        allowNull: false,
    },
    primerApellido: {
        type: sequelize_1.DataTypes.STRING(25),
    },
    segundoApellido: {
        type: sequelize_1.DataTypes.STRING(25),
    },
    telefono: {
        type: sequelize_1.DataTypes.STRING(10),
        allowNull: false,
    },
    calle: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
    },
    noCasaInt: {
        type: sequelize_1.DataTypes.STRING(10),
    },
    noCasaExt: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    colonia: {
        type: sequelize_1.DataTypes.STRING(10),
        allowNull: false,
    },
}, {
    sequelize: database_config_1.sequelize,
    tableName: "clientes",
});
ClientesModel.hasMany(electrodomesticos_model_1.ElectrodomesticosModel, {
    foreignKey: "idCliente",
    sourceKey: "idCliente",
});

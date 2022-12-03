"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElectrodomesticosModel = void 0;
const sequelize_1 = require("sequelize");
const database_config_1 = require("../database/database.config");
const orden_trabajo_model_1 = require("./orden.trabajo.model");
class ElectrodomesticosModel extends sequelize_1.Model {
}
exports.ElectrodomesticosModel = ElectrodomesticosModel;
ElectrodomesticosModel.init({
    idElectrodomestico: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    codigo_seguimiento: {
        type: sequelize_1.DataTypes.STRING(15),
        allowNull: false,
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING(25),
        allowNull: false,
    },
    modelo: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
    },
    marca: {
        type: sequelize_1.DataTypes.STRING(25),
        allowNull: false,
    },
    fecha_entrada: {
        type: sequelize_1.DataTypes.STRING(15),
        allowNull: false,
    },
    fecha_salida: {
        type: sequelize_1.DataTypes.STRING(15),
        allowNull: false,
    },
    estado: {
        type: sequelize_1.DataTypes.STRING(15),
        allowNull: false,
    },
    garantia: {
        type: sequelize_1.DataTypes.STRING(15),
        allowNull: false,
    },
    observaciones: {
        type: sequelize_1.DataTypes.STRING(250),
        allowNull: false,
    },
    idCliente: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    sequelize: database_config_1.sequelize,
    tableName: "electrodomesticos",
});
ElectrodomesticosModel.hasOne(orden_trabajo_model_1.OrdenTrabajoModel, {
    foreignKey: "idElectrodomestico",
    sourceKey: "idElectrodomestico",
});

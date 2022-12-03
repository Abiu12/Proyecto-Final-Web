"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioModel = void 0;
const sequelize_1 = require("sequelize");
const database_config_1 = require("../database/database.config");
const sesion_model_1 = require("./sesion.model");
class UsuarioModel extends sequelize_1.Model {
}
exports.UsuarioModel = UsuarioModel;
UsuarioModel.init({
    idUsuario: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    idEmpleado: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    correo: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false,
    },
    contrasenia: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false,
    },
    estatus: {
        type: sequelize_1.DataTypes.STRING(1),
        allowNull: false,
        defaultValue: "A",
    },
    rol: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: false,
        defaultValue: "1111"
    },
    token_restauracion: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: true,
    },
}, {
    sequelize: database_config_1.sequelize,
    tableName: "usuario",
});
UsuarioModel.hasMany(sesion_model_1.SesionModel, {
    foreignKey: "idUsuario",
    sourceKey: "idUsuario"
});

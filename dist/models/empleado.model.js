"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpleadoModel = void 0;
const sequelize_1 = require("sequelize");
const database_config_1 = require("../database/database.config");
const usuario_model_1 = require("./usuario.model");
class EmpleadoModel extends sequelize_1.Model {
}
exports.EmpleadoModel = EmpleadoModel;
EmpleadoModel.init({
    idEmpleado: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
    },
    primerApellido: {
        type: sequelize_1.DataTypes.STRING(50),
    },
    segundoApellido: {
        type: sequelize_1.DataTypes.STRING(50),
    },
    genero: {
        type: sequelize_1.DataTypes.STRING(1),
        allowNull: false,
    }
}, {
    sequelize: database_config_1.sequelize,
    tableName: "empleado",
});
EmpleadoModel.hasMany(usuario_model_1.UsuarioModel, {
    sourceKey: "idEmpleado",
    foreignKey: "idEmpleado"
});

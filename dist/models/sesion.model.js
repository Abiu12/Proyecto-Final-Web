"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SesionModel = void 0;
const sequelize_1 = require("sequelize");
const database_config_1 = require("../database/database.config");
class SesionModel extends sequelize_1.Model {
}
exports.SesionModel = SesionModel;
SesionModel.init({
    idSesion: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    idUsuario: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    fecha_cierre: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW
    }
}, {
    sequelize: database_config_1.sequelize,
    tableName: "sesion",
});
/* SesionModel.hasMany(UsuarioModel, {
  foreignKey: "idUsuario",
  sourceKey:"idUsuario"
}); */ 

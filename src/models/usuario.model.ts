import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/database.config";
import UsuarioType from "../types/usuario.type";
import { SesionModel } from "./sesion.model";

export class UsuarioModel extends Model<UsuarioType> {
}

UsuarioModel.init(
  {
    idUsuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    idEmpleado:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    correo: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    contrasenia: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    estatus: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "A",
    },
    rol: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "1111"
    },
  },
  {
    sequelize,
    tableName: "usuario",
  }
);


UsuarioModel.hasMany(SesionModel, {
  foreignKey: "idUsuario",
  sourceKey:"idUsuario"
});
import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/database.config";
import EmpleadoType from "../types/empleado.type";
import { UsuarioModel } from "./usuario.model";

export class EmpleadoModel extends Model<EmpleadoType> {}

EmpleadoModel.init(
  {
    idEmpleado: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    primerApellido: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    segundoApellido: {
      type:DataTypes.STRING(50),
      allowNull: true,
    },
    genero:{
      type: DataTypes.STRING(1),
      allowNull: false,
    }
  },
  {
    sequelize,
    tableName: "empleado",
  }
);

EmpleadoModel.hasMany(UsuarioModel,{
  sourceKey:"idEmpleado",
  foreignKey:"idEmpleado"
});
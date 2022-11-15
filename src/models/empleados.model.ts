import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/database.config";
import EmpleadoType from "../types/empleados.type";


export class EmpleadosModel extends Model<EmpleadoType> {}

EmpleadosModel.init(
  {
    idEmpleado: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement:true /**Es incrementable */
    },
    nombre: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    apellidoPaterno: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    apellidoMaterno: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    telefono: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "empleados",
  }
);

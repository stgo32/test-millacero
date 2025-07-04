import { DataTypes, Model, InferAttributes, InferCreationAttributes } from "sequelize";
import { sequelize } from "../db/config";

export class Info extends Model<
  InferAttributes<Info>,
  InferCreationAttributes<Info>
> {}

Info.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    fullname: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING, allowNull: false },
    address: { type: DataTypes.STRING, allowNull: false },
    numOfApartments: { type: DataTypes.INTEGER, allowNull: false },
    typeOfService: {
      type: DataTypes.ENUM("remote-lite", "remote-full", "access"),
      allowNull: false,
    },
    buyeeType: {
      type: DataTypes.ENUM("resident", "comitee", "admin", "real-state", "other"),
      allowNull: false,
    },
    comment: { type: DataTypes.TEXT },
  },
  {
    sequelize,
    modelName: "Info",
  }
);

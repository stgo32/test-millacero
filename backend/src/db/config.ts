import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
    "millacero_db",
    "millacero_user",
    "123456", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

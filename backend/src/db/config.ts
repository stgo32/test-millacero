import dotenv from "dotenv";
dotenv.config();

import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  process.env.DB_NAME || "millacero_db",
  process.env.DB_USER || "millacero_user",
  process.env.DB_PASS || "password",
  {
    host: process.env.DB_HOST || "localhost",
    dialect: "mysql",
    logging: false,
  }
);

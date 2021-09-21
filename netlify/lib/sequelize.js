import { Sequelize } from "sequelize-cockroachdb";
import fs from "fs";
import path from "path";

// Connect to CockroachDB through Sequelize
const sequelize = new Sequelize({
  dialect: "postgres",
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  dialectOptions: {
    ssl: {
      //For secure connection:
      ca: fs.readFileSync(path.join(__dirname, "../certs/cc-ca.crt")).toString()
    }
  },
  logging: false
});

export const Corgis = sequelize.define("corgis", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.TEXT
  },
  instagram: {
    type: Sequelize.TEXT
  }
});

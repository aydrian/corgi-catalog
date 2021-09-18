import { Sequelize } from "sequelize-cockroachdb";
import fs from "fs";
import path from "path";

// Connect to CockroachDB through Sequelize
const sequelize = new Sequelize({
  dialect: "postgres",
  username: "itsaydrian-stream",
  password: process.env.DB_PASSWORD,
  host: "free-tier.gcp-us-central1.cockroachlabs.cloud",
  port: 26257,
  database: "minty-rabbit-2810.corgi_catalog",
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

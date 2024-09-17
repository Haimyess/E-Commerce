/** @format */
// We use it to connect to the database. to make queries
const knex = require("knex");

// We use it to create secrets, for example login credetntial that we dondt want others to know about
const dotenv = require("dotenv");

dotenv.config();

const database = knex({
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    ssl: { rejectUnauthorized: false },
  },
});

module.exports = database;

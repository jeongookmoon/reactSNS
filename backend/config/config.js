const dotenv = require("dotenv")

dotenv.config()

module.exports = {
  "development": {
    "username": "react-sns-admin",
    "password": process.env.DB_PASSWORD,
    "database": "reactSns",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "test": {
    "username": "react-sns-admin",
    "password": process.env.DB_PASSWORD,
    "database": "reactSns",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": "react-sns-admin",
    "password": process.env.DB_PASSWORD,
    "database": "reactSns",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  }
}
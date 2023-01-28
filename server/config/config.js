require('dotenv').config()

module.exports = {

port: process.env.PORT || 5000,
  
secret: process.env.JWT_SECRET || 'secret',

production: {
  use_env_variable: 'JAWSDB_URL',
    dialect: 'mysql',
    define: {
      charset: 'utf8mb4',
      collate: 'utf8mb4_0900_ai_ci',
      paranoid: false,
      timestamp: true,
      freezeTableName: true,
      underscored: false
      },
},

development: {
  database: process.env.DB_DEV_DATABASE,
  username: process.env.DB_DEV_USERNAME, 
  password: process.env.DB_DEV_PASSWORD, 
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
  define: {
    charset: 'utf8mb4',
    collate: 'utf8mb4_0900_ai_ci',
    paranoid: false,
    timestamp: true,
    freezeTableName: true,
    underscored: false
    },
  }
}
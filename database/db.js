const Sequelize = require("sequelize")
const db = {}
const fs = require('fs');

const config = JSON.parse(fs.readFileSync("config/config.json"))

const sequelize = new Sequelize(config.database, config.user, config.password, {
  dialect: 'mysql',
  port: config.port,
  host: config.host,
  user: config.user,
  password: config.password,
  pool:{
    max: 5,
    min: 0,
    acquire: 300000,
    idle: 10000
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db

// CREATE TABLE users ( 
//   id smallint unsigned not null auto_increment, 
//   first_name varchar(200) not null,
//   last_name varchar(200) not null,
//   email varchar(200) not null,
//   password varchar(200) not null,
//   created_at varchar(200) not null, 
//   constraint pk_example primary key (id) );

// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'
const Sequelize = require("sequelize");

const sequelize = new Sequelize("appStore", "root", "123456789", {
  host: "127.0.0.1",
  port: 3306,
  dialect: "mysql"
});

sequelize.authenticate().then(()=>{
  console.log("connected to database.");
}).catch((err)=>{
  console.log(err.message);
});

module.exports = sequelize;
const express = require("express");
const todoFunc = require("./routers/todoRoute");
const app = express();
const port = 8909;

app.use(express.json());
app.use("/api", todoFunc)

app.listen(port, ()=>{
  console.log(`Listening to port: ${port}`);
});
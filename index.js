var express = require("express");
var bodyParser =require("body-parser") 
const app= express();

app.use(bodyParser.json)
PORT=3000;

app.listen(PORT,()=>{console.log(`Server on port ${PORT}`)})
const exp = require("express").Router();

exp.get("/",(req,res)=>{
    res.send("This is Default Route");
})

exp.get("/gethello",(req,res)=>{
    // res.send("Hello NodeJS!!");
    res.json({"data_res":"Hello Node!!"});
})

module.exports = exp;
const serv_exp = require("express");
const app = serv_exp();

app.use(serv_exp.static('public_static'))

app.listen(8000,()=>{
    console.log("Question 2 Port Listening!!");
})
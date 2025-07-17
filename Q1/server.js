const serv_exp = require("express");
const app = serv_exp();

const exp=require('./Routes/GetHelloRout')

app.use(serv_exp.static('public'))
app.use(exp);

app.listen(8000,()=>{
    console.log("Question 1 Port Listening!!");
})
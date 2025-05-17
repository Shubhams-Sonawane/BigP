let express=require("express");

const db = require("./db");

let app=express();
app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("nav.ejs");
});


app.get("/addemp",(req,res)=>{
    res.render("addemp.ejs");
});

app.get('/viewemp',(req,res)=>{
    res.render("viewemployee.ejs")
});

app.listen(3000,()=>{
console.log("Server Started on 3000 port");
});



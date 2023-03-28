const express = require('express');

const app =express ();

app.get("/",function (req,res){
    res.send("<h1> Hello World </h1>");
})

app.get("/contact",function(req,res){
    res.send("Contact ME at : sathishkumarg5024@gmail.com");
})
app.get("/about",function (req,res){
    res.send("<em>Hi, I am Sathish, A CSE Undergrad.</em>");
})
app.get("/hobbies",function (req,res){
    res.send("Cricket");
})
app.listen(5000,function(){
    console.log("server is up and running!!");

})
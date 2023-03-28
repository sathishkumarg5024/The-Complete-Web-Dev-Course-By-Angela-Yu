const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function (req,res){
   res.sendFile(__dirname + "/index.html");

});


app.post("/",function(res,req){
    // console.log(req.body);
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1+num2;
    res.send("The answer is " + result );
});
app.listen(5000,function(){
    console.log("The server is up and running on port 200");
});
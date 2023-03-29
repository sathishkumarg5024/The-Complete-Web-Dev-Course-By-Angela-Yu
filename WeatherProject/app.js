const express = require('express');
const https = require('https');
const bodyParser= require('body-parser');
const app = express();


app.use(bodyParser.urlencoded({extended:true}));
app.get("/", (req,res)=>{
    
res.sendFile(__dirname + "/index.html");
    
});

app.post("/",(req,res)=>{
const apiKey = "a2fb725da45485780922ce58c4cde019";
const query = req.body.cityName;
const unit = "metric";
const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&units=" + unit +"&appid=" + apiKey ;
https.get(url , (response)=>{
    console.log(response.statusCode);

    response.on("data", (data)=>{
      const weatherData=JSON.parse(data)
    //   console.log(weatherData);
    //   const object = {
    //     name : "Sathish",
    //     profession : "Data Scientist"
    //   }
    //   console.log(JSON.stringify(object));
    const temp = weatherData.main.temp ;
    // console.log(temp);
    const weatherDescription = weatherData.weather[0].description;
    // console.log(weatherDescription);
    const icon = weatherData.weather[0].icon;
    const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
    res.write("<p>The weather is currently " + weatherDescription  + "</p>");
    res.write("<h1>The Temperature in " + query + " is " + temp + " degree Celcius</h1>");
    res.write("<img src = " + imageURL + ">");
    res.send();
    // there can be only one res.send in a given get request!!
    })
})
});



app.listen (3000, () => {
    console.log("The Server is up and running on port 3000");
});
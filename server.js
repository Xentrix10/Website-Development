//jshint eversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const request = require("request");
var path = require('path')

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'))
app.set('view engine', 'ejs');

//
// app.post("/", function(req, res){
//   const apiKey = "c88bf63f13fad37ad0261d3a37db971e";
//   const cityName = "London";
//   const unit = "metric";
//
//
//   const url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName +"&appid="+ apiKey+"&units="+ unit ;
//   const lcurl = "http://ip-api.com/json";
//
//   // https.get(lcurl , function(response){
//   //   console.log(response.statusCode);
//   //
//   //           response.on("data", function(data){
//   //             const lcData = JSON.parse(data);
//   //
//   //             console.log(status);
//   //             res.write("")
//   //           });
//   // });
//
//   https.get(url , function(response){
//     console.log(response.statusCode);
//
//             response.on("data", function(data){
//             const weatherData = JSON.parse(data);
//
//
//             let cftemp = weatherData.main.feels_like;
//             let ctemp = weatherData.main.temp;
//             const weatherDescription = weatherData.weather[0].main;
//             const timeZone = (weatherData.timezone)/3600;
//             const date = weatherData.dt
//             let weatherTimezone = new Date(weatherData.dt * 1000 - weatherData.timezone * 1000);
//         });
//     });
//   });


  app.get("/", function(req, res){
    const apiKey = "c88bf63f13fad37ad0261d3a37db971e";
    const cityName = "London";
    const unit = "metric";



    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName +"&appid="+ apiKey+"&units="+ unit ;

    https.get(url , function(response){
      console.log(response.statusCode);
        response.on("data", function(data){
        const weatherData = JSON.parse(data);


        let cftemp = weatherData.main.feels_like;
        let ctemp = weatherData.main.temp;
        ctemp = Math.round(ctemp);
        const weatherDescription = weatherData.weather[0].main;
        const timeZone = (weatherData.timezone)/3600;
        const date = weatherData.dt
        let weatherTimezone = new Date(weatherData.dt * 1000 - weatherData.timezone * 1000);
        res.render('index', {ptemp: ctemp});
     });
    });

  });

  app.get("/wallet", function(req, res){

  });


app.listen(3000,function(){
  console.log("Server started on port 3000");
});

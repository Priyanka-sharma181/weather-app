const request = require("request")
const forecast = require("./utils/forecast")
const geoCode = require("./utils/geocode")
geoCode('India',(error,data)=>{
    console.log(data);
    forecast(data.latitude,data.longitude,(error,data)=>{
        console.log(data);
        console.log(error);
    })

})


const request = require("request")
const url = 'https://api.openweathermap.org/data/2.5/weather?q=ujjain&appid=8d99f5b58da6d405f73a6c22659140d7'

request({url:url,json:true},(error,response)=>{
    if(error){
         console.log("unable to connect to weather service");
    }else{
     console.log("it is currently tempreture " + response.body.main.temp   );

    }
})



const geoCodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles .json?access_token=pk.eyJ1IjoicGlua2lzMiIsImEiOiJjbDZuZDF4eXYwMGNlM2pvNzd0dDdieHVoIn0.bjgiL2xiJUrfDRYSdkPqYQ'
 
request({url:geoCodeUrl,json:true},(error,response)=>{
    if(error){
        console.log("unable to connect location services");
    }else if(response.body.features.length===0){
          console.log("unable to find location try another");
    }
    else{
        const latitude = response.body.features[0].center[0]
        const longitude = response.body.features[0].center[1]
           console.log(longitude,latitude);
    }
    
})
const request = require("request")

const geoCode = (address,callback)=>{
    const url= `https://api.mapbox.com/geocoding/v5/mapbox.places/${{address}}.json?access_token=pk.eyJ1IjoicGlua2lzMiIsImEiOiJjbDZuZDF4eXYwMGNlM2pvNzd0dDdieHVoIn0.bjgiL2xiJUrfDRYSdkPqYQ`
    request({url:url,json:true},(error,response)=>{
        // console.log(response.body);
        if(error){
            callback("unable to connect location services",undefined);
        }else if(response.body.features.length===0){
                callback("unable to find location try another",undefined);
        }
        else{
            callback(undefined,{
             latitude: response.body.features[0].center[0],
           longitude : response.body.features[0].center[1],
            location:response.body.features[0].place_name
    })
        }
    })
}

module.exports = geoCode
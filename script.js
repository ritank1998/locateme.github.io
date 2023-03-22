const locate = () =>{
    if(navigator.geolocation){
       // navigator.geolocation.getCurrentPosition((position)=>{
                      navigator.geolocation.getCurrentPosition(showPosition,showError);
        
    }
    else{
        alert("Geolocation not supported");
    }
};

const showPosition = (position)=>{
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    console.log(lat,long);
}

const showError = (error) =>{
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("Your location is denied");
            break;
    
        case error.POSITION_UNAVIALABLE:
            alert("The geoPosition is not avialable");
        
        case error.RUNTIME_ERROR:
            alert("RUN TIME ERROR");
    }
}
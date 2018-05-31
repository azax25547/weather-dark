//variables
var latData;
var longData;
var total;
var api = "https://api.darksky.net/forecast/";
var cors = 'https://cors-anywhere.herokuapp.com/';
window.onload = function () {
  var date = new Date();
//   new Date(Date.now()).toLocaleString();
  $(".time").text(date.toDateString());
    /*Getting Geolocation Data*/
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position,showError) {
            latData =  position.coords.latitude;
            longData = "," + position.coords.longitude;
            var appId = "c81b25dc16879d0b8591ab951d4f2dd4/";
            total = cors + api + appId + latData + longData+"?units=si";
           ;
          console.log(total);
            getWeather();
           
        });
    } else {
        x.innerHTML = "GeoLocation is not supported by the browser";
    }
}

function getWeather(){
    $.ajax({
        url:total,
        success: function(data){
            console.log(data);
            $(".summary").text(data.currently.summary);
            $(".temp").text(Math.round(data.currently.temperature)+" C");
            $(".humidity").append(" "+(data.currently.humidity)*100);
            var skycons = new Skycons({"color": "pink"});
              
            switch(data.currently.icon){
                case 'clear-day' : skycons.add("icon1", Skycons.CLEAR_DAY);
                break;
                case 'clear-night' : skycons.add("icon1", Skycons.NIGHT);
                break;
                case 'partly-cloudy-day' : skycons.add("icon1", Skycons.PARTLY_CLOUDY_DAY);
                break;
                case 'partly-cloudy-night' : skycons.add("icon1", Skycons.PARTLY_CLOUDY_NIGHT);
                break;
                case 'cloudy' : skycons.add("icon1", Skycons.CLOUDY);
                break;
                case 'rain' : skycons.add("icon1", Skycons.RAIN);
                break;
                case 'sleet' : skycons.add("icon1", Skycons.SLEET);
                break;
                case 'snow' : skycons.add("icon1", Skycons.SNOW);
                break;
                case 'wind' : skycons.add("icon1", Skycons.WIND);
                break;
                case 'fog' : skycons.add("icon1", Skycons.FOG);
                break;
            }
             skycons.play();
           
            $("#sum1").text(data.daily.data[0].summary);
            $("#tempMax1").append(" "+data.daily.data[0].temperatureMax+" C");
            $("#tempMin1").append(" "+data.daily.data[0].temperatureMin+" C");
            $("#hum1").append((" "+data.daily.data[0].humidity)*100);

            var skycons1 = new Skycons({"color": "pink"});
              
            switch(data.daily.data[0].icon){
                case 'clear-day' : skycons1.add("icon2", Skycons.CLEAR_DAY);
                break;
                case 'clear-night' : skycons1.add("icon2", Skycons.NIGHT);
                break;
                case 'partly-cloudy-day' : skycons1.add("icon2", Skycons.PARTLY_CLOUDY_DAY);
                break;
                case 'partly-cloudy-night' : skycons1.add("icon2", Skycons.PARTLY_CLOUDY_NIGHT);
                break;
                case 'cloudy' : skycons1.add("icon2", Skycons.CLOUDY);
                break;
                case 'rain' : skycons1.add("icon2", Skycons.RAIN);
                break;
                case 'sleet' : skycons1.add("icon2", Skycons.SLEET);
                break;
                case 'snow' : skycons1.add("icon2", Skycons.SNOW);
                break;
                case 'wind' : skycons1.add("icon2", Skycons.WIND);
                break;
                case 'fog' : skycons1.add("icon2", Skycons.FOG);
                break;
            }
            skycons1.play();
           

            $("#sum2").text(data.daily.data[1].summary);
            $("#tempMax2").append(" "+data.daily.data[1].temperatureMax+" C");
            $("#tempMin2").append(" "+data.daily.data[1].temperatureMin+" C");
            $("#hum2").append((" "+data.daily.data[1].humidity)*100);

            var skycons2 = new Skycons({"color": "pink"});
              
            switch(data.daily.data[1].icon){
                case 'clear-day' : skycons2.add("icon3", Skycons.CLEAR_DAY);
                break;
                case 'clear-night' : skycons2.add("icon3", Skycons.NIGHT);
                break;
                case 'partly-cloudy-day' : skycons2.add("icon3", Skycons.PARTLY_CLOUDY_DAY);
                break;
                case 'partly-cloudy-night' : skycons2.add("icon3", Skycons.PARTLY_CLOUDY_NIGHT);
                break;
                case 'cloudy' : skycons2.add("icon3", Skycons.CLOUDY);
                break;
                case 'rain' : skycons2.add("icon3", Skycons.RAIN);
                break;
                case 'sleet' : skycons2.add("icon3", Skycons.SLEET);
                break;
                case 'snow' : skycons2.add("icon3", Skycons.SNOW);
                break;
                case 'wind' : skycons2.add("icon3", Skycons.WIND);
                break;
                case 'fog' : skycons2.add("icon3", Skycons.FOG);
                break;
            }
            skycons2.play();

            
            $("#sum3").text(data.daily.data[2].summary);
            $("#tempMax3").append(" "+data.daily.data[2].temperatureMax+" C");
            $("#tempMin3").append(" "+data.daily.data[2].temperatureMin+" C");
            $("#hum3").append((" "+data.daily.data[2].humidity)*100);

            var skycons3 = new Skycons({"color": "pink"});
              
            switch(data.daily.data[2].icon){
                case 'clear-day' : skycons2.add("icon4", Skycons.CLEAR_DAY);
                break;
                case 'clear-night' : skycons2.add("icon4", Skycons.NIGHT);
                break;
                case 'partly-cloudy-day' : skycons2.add("icon4", Skycons.PARTLY_CLOUDY_DAY);
                break;
                case 'partly-cloudy-night' : skycons2.add("icon4", Skycons.PARTLY_CLOUDY_NIGHT);
                break;
                case 'cloudy' : skycons2.add("icon4", Skycons.CLOUDY);
                break;
                case 'rain' : skycons2.add("icon4", Skycons.RAIN);
                break;
                case 'sleet' : skycons2.add("icon4", Skycons.SLEET);
                break;
                case 'snow' : skycons2.add("icon4", Skycons.SNOW);
                break;
                case 'wind' : skycons2.add("icon4", Skycons.WIND);
                break;
                case 'fog' : skycons2.add("icon4", Skycons.FOG);
                break;
            }
            skycons3.play();
        },
        error: function(err){
            console.log(err);
        }
    })
 
}
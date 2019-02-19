let name = document.querySelector(".name");
let date = document.querySelector(".date");
let temp = document.querySelector(".temp");
let desc = document.querySelector(".desc");
let hum = document.querySelector(".hum");
let pressure = document.querySelector(".pressure");
let ozone = document.querySelector(".ozone");
let icon = document.querySelector(".image");

var temps = [];

var isConverted = false;
var isLoading = false;

class Weather {
  getLocation() {
    fetch("https://geoip-db.com/json/")
      .then(res => res.json())
      .then(res => {
        name.innerHTML += `${res.city}, ${res.state}`;
      });
  }

  async getCurrentForecast() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async res => {
        let result = await fetch(
          `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/c81b25dc16879d0b8591ab951d4f2dd4/${
            res.coords.latitude
          },${res.coords.longitude}?units=si`
        )
          .then(res => res.json())
          .catch(err => alert(err));

        console.log(result);
        date.innerHTML += new Date().toLocaleDateString();
        temp.innerHTML += `${Math.floor(
          result.currently.temperature
        )} <i class="wi wi-celsius"></i>`;
        temps.push(Math.floor(result.currently.temperature));
        temps.push(Math.floor(result.currently.temperature * 1.8) + 32);
        desc.innerHTML += result.currently.summary;
        hum.innerHTML += Math.floor(result.currently.humidity * 100) + "%";
        pressure.innerHTML += result.currently.pressure;
        ozone.innerHTML += result.currently.ozone;
        getIcon(result.currently.icon, icon);
        console.log(temps);
      });
    } else {
      alert(
        "Navigator does not support in your browser. Please update it to latest"
      );
    }
  }
}
const convert = () => {
  if (!isConverted) {
    temp.innerHTML = temps[1] + ` <i class="wi wi-fahrenheit"></i>`;
    isConverted = !isConverted;
  } else {
    temp.innerHTML = temps[0] + ` <i class="wi wi-celsius"></i>`;
    isConverted = !isConverted;
  }
};

const getIcon = (image, el) => {
  if (image === "clear-day") {
    el.innerHTML += `<i class="wi wi-day-sunny"></i>`;
  } else if (image === "clear-night") {
    el.innerHTML += `<i class="wi wi-night-clear"></i>`;
  } else if (image === "rain") {
    el.innerHTML += `<i class="wi wi-rain"></i>`;
  } else if (image === "snow") {
    el.innerHTML += `<i class="wi wi-snow"></i>`;
  } else if (image === "sleet") {
    el.innerHTML += `<i class="wi wi-sleet"></i>`;
  } else if (image === "wind") {
    el.innerHTML += `<i class="wi wi-windy"></i>`;
  } else if (image === "fog") {
    el.innerHTML += `<i class="wi wi-fog"></i>`;
  } else if (image === "cloudy") {
    el.innerHTML += `<i class="wi wi-cloudy"></i>`;
  } else if (image === "partly-cloudy-day") {
    el.innerHTML += `<i class="wi wi-day-cloudy-gusts"></i>`;
  } else if (image === "partly-cloudy-night") {
    el.innerHTML += `<i class="wi wi-night-alt-cloudy"></i>`;
  } else {
    el.innerHTML = "";
  }
};

var start = new Weather();
start.getLocation();
start.getCurrentForecast();

setTimeout(() => {
  document.querySelector(".loader").style.display = "none";
  document.querySelector(".card").classList.add("animated", "fadeIn");
  document.querySelector(".card").style.display = "block";
}, 2000);

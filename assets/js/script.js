var searchCity = document.querySelector('#searchCity');
var cityInput = document.querySelector('#searchBar');
var cityForecast = document.querySelector('#city-forecast');


//Todays Variables
var cityName = document.querySelector('#city-name');
var day0 = document.querySelector('#day0');
var icon0 = document.querySelector('#icon0');
var temp0 = document.querySelector('#temp0');
var wind0 = document.querySelector('#wind0');
var humid0 = document.querySelector('#humid0');
var uv0 = document.querySelector('#uv0');

//Tomorrows Variables
var day1 = document.querySelector('#day1');
var icon1 = document.querySelector('#icon1');
var temp1 = document.querySelector('#temp1');
var wind1 = document.querySelector('#wind1');
var humid1 = document.querySelector('#humid1');


//Day 2 variables
var day2 = document.querySelector('#day2');
var icon2 = document.querySelector('#icon2');
var temp2 = document.querySelector('#temp2');
var wind2 = document.querySelector('#wind2');
var humid2 = document.querySelector('#humid2');


//Day 3 variables
var day3 = document.querySelector('#day3');
var icon3 = document.querySelector('#icon3');
var temp3 = document.querySelector('#temp3');
var wind3 = document.querySelector('#wind3');
var humid3 = document.querySelector('#humid3');


//Day 4 variables
var day4 = document.querySelector('#day4');
var icon4 = document.querySelector('#icon4');
var temp4 = document.querySelector('#temp4');
var wind4 = document.querySelector('#wind4');
var humid4 = document.querySelector('#humid4');


//Day 5 variables
var day5 = document.querySelector('#day5');
var icon5 = document.querySelector('#icon5');
var temp5 = document.querySelector('#temp5');
var wind5 = document.querySelector('#wind5');
var humid5 = document.querySelector('#humid5');

var city;  //Input from user
cityForecast.setAttribute("style", "display: none")

var citySubmitHandler = function (event) {
    event.preventDefault();
  
    city = cityInput.value.trim();
    console.log(city)
    if (city) {
        getCityInfo(city);
        cityForecast.setAttribute("style", "display: ")
    } else {
        alert('Please enter a city');
    }
  };

var APIkey = "b1048ffe692830f2dafbaad135f0fd00";




function getCityInfo() {
    var queryURL1 = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIkey;
    fetch(queryURL1)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        var lon = data.coord.lon;
        var lat = data.coord.lat;
        
        var queryURL2 = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&exclude=minutely,hourly,alerts&appid=" + APIkey;
            fetch(queryURL2)  
                .then(function (response) {
                    return response.json();
                }) 
                .then(function (data) {
                    
                    cityName.textContent = city.charAt(0).toUpperCase() + city.slice(1);
                    day0.textContent = moment.unix(data.current.dt).format("MM-DD-YY");

                    temp0.textContent = "Temperature: " + data.current.temp + " Deg F";
                    wind0.textContent = "Wind-Speed: " + data.current.wind_speed + "mph";
                    humid0.textContent = "Humidity: " + data.current.humidity + "%";
                    uv0.textContent = "UV Index: " + data.current.uvi;

                    day1.textContent = moment.unix(data.daily[1].dt).format("MM-DD-YY");

                    temp1.textContent = "Temp: " + data.daily[1].temp.day + "F";
                    wind1.textContent = "Wind: " + data.daily[1].wind_speed + "mph";
                    humid1.textContent = "Humidity: " + data.daily[1].humidity + "%";

                    day2.textContent = moment.unix(data.daily[2].dt).format("MM-DD-YY");

                    temp2.textContent = "Temp: " + data.daily[2].temp.day + "F";
                    wind2.textContent = "Wind: " + data.daily[2].wind_speed + "mph";
                    humid2.textContent = "Humidity: " + data.daily[2].humidity + "%";

                    day3.textContent = moment.unix(data.daily[3].dt).format("MM-DD-YY");

                    temp3.textContent = "Temp: " + data.daily[3].temp.day + "F";
                    wind3.textContent = "Wind: " + data.daily[3].wind_speed + "mph";
                    humid3.textContent = "Humidity: " + data.daily[3].humidity + "%";

                    day4.textContent = moment.unix(data.daily[4].dt).format("MM-DD-YY");

                    temp4.textContent = "Temp: " + data.daily[4].temp.day + "F";
                    wind4.textContent = "Wind: " + data.daily[4].wind_speed + "mph";
                    humid4.textContent = "Humidity: " + data.daily[4].humidity + "%";

                    day5.textContent = moment.unix(data.daily[5].dt).format("MM-DD-YY");

                    temp5.textContent = "Temp: " + data.daily[5].temp.day + "F";
                    wind5.textContent = "Wind: " + data.daily[5].wind_speed + "mph";
                    humid5.textContent = "Humidity: " + data.daily[5].humidity + "%";
                })

        })
    }

searchCity.addEventListener('submit', citySubmitHandler);
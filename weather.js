let updateWidget = function(data) {

  //window.weatherData = data
  jQuery(".card-text").text("It is " + data.main.temp.toFixed(0) + " degrees outside.")
  jQuery(".card-title").text(data.name)
  console.log(data)

  let imgID = data.weather[0].icon
  let iconURL = "http://openweathermap.org/img/w/" + imgID + ".png"
  jQuery("img").attr("src", iconURL)
  console.log(iconURL)


  // HINT:
  // Weather icons are provided for you. Sample URL: http://openweathermap.org/img/w/01d.png
  // The very last part ('01d.png') should be obtained from the weather information.

}


let getWeather = function(data) {
  let latitude = data.coords.latitude;
  let longitude = data.coords.longitude;
  let apiKey = 'a163cced4be5c8991e18f44ac4292abc'; // ERK's API Key

  let weatherServiceURL = 'https://api.openweathermap.org/data/2.5/weather?'
  weatherServiceURL += 'lat=' + latitude
  weatherServiceURL += '&lon=' + longitude
  weatherServiceURL +='&appid=' + apiKey + '&units=imperial'

  fetch(weatherServiceURL).then(convertToJSON).then(updateWidget).catch(displayError);
}


  let getCoordinates = function(event){
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getWeather)
  }


let fcst = jQuery("#get_forecast")
fcst.on("click", getCoordinates)

////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANY CODE BEYOND THIS POINT
////////////////////////////////////////////////////////////

let convertToJSON = function(rawData) { return rawData.json(); }
let displayError = function(error) { console.debug(error); }

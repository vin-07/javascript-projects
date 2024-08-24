async function checkWeather(location) {
  const apiKey = "use your api key from open weather map";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}`;
  fetch(apiURL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        let temprature = document.querySelector(".temprature");
        temprature.innerText = `${Math.round(data.main.temp-273.15)}°C`
        let placeName = document.querySelector(".place");
        placeName.innerText = `${data.name}`;
        let weatherType = document.querySelector("#type1");
        weatherType.innerText = `${data.weather[0].main}`;
        let humidity = document.querySelector("#humidity1");
        humidity.innerText = `${data.main.humidity}%`;        
        let wind = document.querySelector("#wind1")
        wind.innerText = `${data.wind.speed}km/h`
        let pressure = document.querySelector("#pressure1");
        pressure.innerText = `${(data.main.pressure/1013).toFixed(3)}`
    })
    .catch((error) => {
      console.log(error);
    });
}
let text1 = document.querySelector("#place1");
let text2 = document.querySelector("#place2");
let text3 = document.querySelector("#place3");
let text4 = document.querySelector("#place4");
let text5 = document.querySelector("#place5");
text1.addEventListener("click", () => {
  checkWeather(`${document.querySelector("#place1").innerText}`);
  document.querySelector("input").value = document.querySelector("#place1").innerText;
});
text2.addEventListener("click", () => {
  checkWeather(`${document.querySelector("#place2").innerText}`);
  document.querySelector("input").value = document.querySelector("#place2").innerText;
});
text3.addEventListener("click", () => {
  checkWeather(`${document.querySelector("#place3").innerText}`);
  document.querySelector("input").value = document.querySelector("#place3").innerText;
});
text4.addEventListener("click", () => {
  checkWeather(`${document.querySelector("#place4").innerText}`);
  document.querySelector("input").value = document.querySelector("#place4").innerText;
});
text5.addEventListener("click", () => {
  checkWeather(`${document.querySelector("#place5").innerText}`);
  document.querySelector("input").value = document.querySelector("#place5").innerText;
  
});

let searchButton = document.querySelector("button");

searchButton.addEventListener("click", () => {
  let textFeild = document.querySelector("input").value;
  checkWeather(`${textFeild}`);
});

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
  }
  
  const x = document.getElementById("hamburgerBtn")
  x.onclick = toggleMenu;

  const weatherApiURL =
  /*"https://api.openweathermap.org/data/2.5/weather?id=5780993&units=imperial&appid=63078f13e56a697c7c482217dd416284";*/
  "https://api.openweathermap.org/data/2.5/weather?q=carlsbad&units=imperial&appid&appid=63078f13e56a697c7c482217dd416284";

fetch(weatherApiURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const imagesrc = "https://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
    const desc = jsonObject.weather[0].description;
    const finaldesc = desc.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    if (document.querySelector("#temperature") !== null) {
      document.querySelector("#temperature").textContent = jsonObject.main.temp.toFixed(0);
      document.querySelector("#weather-icon").textContent = imagesrc;
      document.querySelector("#weather-icon").setAttribute("src", imagesrc);
      document.querySelector("#weather-icon").setAttribute("alt", desc);
    }

    if (document.querySelector("#chill") !== null) {
      document.querySelector("#chill").textContent = jsonObject.main.feels_like.toFixed(0);
    }

    if (document.querySelector("#speed") !== null) {
      document.querySelector("#speed").textContent = jsonObject.wind.speed.toFixed(0);
    }
  
    if (document.querySelector("#currently") !== null) {
      document.querySelector("#currently").textContent = finaldesc;
    }
  });
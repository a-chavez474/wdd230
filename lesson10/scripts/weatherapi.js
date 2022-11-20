// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const description = document.querySelector('#currently');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=63078f13e56a697c7c482217dd416284';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log('error: ${error.message}');
    }
  }
  
  apiFetch();
  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);

  function displayResults(data){
    temperature.textContent = data.main.temp.toFixed(0);
    let desc = capitalize(data.weather[0].description);
    description.textContent = desc;
    captionDesc.textContent = 'Icon of current weather condition at Bountiful which is ${desc}';
    weatherIcon.src = 'https://openweathermap.org/img/w/${data.weather[0].icon}.png';
    weatherIcon.alt = 'Icon of current weather condition at Bountiful which is ${desc}';
  }
  }
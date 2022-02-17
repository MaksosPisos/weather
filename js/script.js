const loc = document.querySelector('#loc');
const icon = document.querySelector('#icon');
const temp = document.querySelector('#temp');
const feelTemp = document.querySelector('#feelTemp');
const wind = document.querySelector('#wind');
const humidity = document.querySelector('#humidity');
const direction = document.querySelector('#direction');

fetch('https://ipapi.co/json/')
  .then(result => result.json())
  .then(defaultCity => {
    testApi(defaultCity.city);
  });

function testApi(cityName) {
    const apiURL = `http://api.openweathermap.org/data/2.5/weather?appid=86095446ea62c353a352f44e0b12a207&units=metric&q=${cityName}`;
    fetch(apiURL)
    .then(result => result.json())
    .then(data => {
        loc.textContent = `${data.name}, ${data.sys.country}`;
        temp.textContent = `${Math.round(data.main.temp)}`; 
        feelTemp.textContent = `${Math.round(data.main.feels_like)}`;
        humidity.textContent = `${data.main.humidity}`
        console.log(data);
        wind.textContent = `${data.wind.speed}`;
        // direction.style.transform = `rotate(${data.wind.deg}deg)`;
        icon.src = `./icons/${data.weather[0].icon}.png`;
        direction.style.transform = `rotate(${data.wind.deg}deg)`
    })
}






//Template Name : Weather App
//Author Name : Maedeh Alizadeh


const card = document.querySelector('.card')
const cityNameInput = document.querySelector('.name-input');
const inputMsg = document.querySelector('.input-msg');
const searchBtn = document.querySelector('.search-btn');

searchBtn.addEventListener('click' , showWeather);

const apiKey = "edc228562ac0a8aa3116d41c0687cf56";

function showWeather(event) {
    event.preventDefault();
    let inputVal = cityNameInput.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then( response => response.json())
        .then (data => {
            console.log(data);
            const { main, name, weather} = data;
            const icon = `http://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`;
            const div = document.createElement('div');
            div.classList.add('weather');
            const markUp = `
                <h1 class="city-name">${name}</h1>
                <p class="temp">${Math.round(main.temp)}&#8451;</p>
                <p class="climate">${weather[0]["description"]}</p>
                <figure  class="weather-icon">
                    <img src="${icon}" alt="weather-icon">
                <figure>
                `;
            div.innerHTML = markUp;
            card.appendChild(div);
            inputMsg.innerText = "";
        })
        .catch ( () => inputMsg.innerText = "Please enter the city name.");
    cityNameInput.value = "";
}


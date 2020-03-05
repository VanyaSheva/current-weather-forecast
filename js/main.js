import createAirportMarkup from "../js/templates/airport.js";
import createCityMarkup from "../js/templates/city.js";

const base = 'http://api.weatherstack.com/current';
const key = '?access_key=0b7ed781006d72200994f4da5d232330';
const weatherContainer = document.querySelector(".weather-container");
let query;
const input = document.querySelector('.input-search');
const form = document.querySelector('.form');

form.addEventListener('submit', searchCity);

function searchCity(e) {
    e.preventDefault();
    weatherContainer.innerHTML = '';
    let inputValue = input.value;
    query = `&query=${inputValue}`;
    getData();
}

function getData() {
    fetch(base + key + query)
        .then(response => response.json())
        .then(data=>{
            console.log(data);
            weatherContainer.textContent = '';
            if(data.request.type === 'IATA'){
                weatherContainer.insertAdjacentHTML('beforeend', createAirportMarkup(data));
                return;
            }
            weatherContainer.insertAdjacentHTML('beforeend', createCityMarkup(data));
        }).catch(error=>{
        alert('This city does not exist');
    });
}


// <img src="${data.current.weather_icons[0]}" alt="weather-icon" class="weather-container__img">

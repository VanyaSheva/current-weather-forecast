 export default function createCityMarkup(data) {
    return `
<p class="weather-container__city weather-container__item">City:${data.location.name}</p>
<p class="weather-container__temperature weather-container__item">Temperature : ${data.current.temperature}</p>
<p class="weather-container__description weather-container__item">Weather-description : ${data.current.weather_descriptions[0]}</p>
<p class="weather-container_windspeed weather-container__item">Wind speed : ${data.current.wind_speed}</p>
<p class="weather-container__localtime weather-container__item">Local time : ${data.location.localtime}</p>
`
}
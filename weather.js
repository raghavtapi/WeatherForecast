const inputRef = document.querySelector('nav .search-location');
const buttonRef = document.querySelector('nav button');

const tempRef = document.querySelector('.weather .temp ');
const locationRef = document.querySelector('.weather .time-location p');
const dateTimeRef = document.querySelector('.weather .time-location span');
const imgRef = document.querySelector('.weather .weather-condition p img');
const conditionRef = document.querySelector('.weather .weather-condition span');


buttonRef.addEventListener('click', function(e) {
    e.preventDefault();
    console.log(inputRef.value);
    locationRef.innerText = inputRef.value;

    getWeatherData(inputRef.value);
});

function getWeatherData(city) {

    fetch(`https://api.weatherapi.com/v1/current.json?key=35af7ff606db422880d141328231305&q=${city}`)
        .then(res => res.json())
        .then(data => updateWeatherInfo(data));
}

function updateWeatherInfo(weatherData) {
    tempRef.innerText = weatherData.current.temp_c;
    locationRef.innerText = weatherData.location.name;
    dateTimeRef.innerText = weatherData.current.last_updated;
    imgRef.src = weatherData.current.condition.icon;
    conditionRef.innerText = weatherData.current.condition.text;
}
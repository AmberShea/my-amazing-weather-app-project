let city = "Paris";
let apiKey = "07b4o18620b3fb3dt57a04f9330d1c11";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&metric=true`;

axios.get(apiUrl).then(displayTemperature);
function displayTemperature(response) {
  console.log(response.data.temperature.current);
  let temperatureElement = document.querySelector(`#current-temperature-value`);
  let temperature = Math.round(response.data.temperature.current);
  temperatureElement.innerHTML = temperature;
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector(`#search-input`);
  let city = searchInputElement.value.trim();

  let cityElement = document.querySelector(`#current-city`);
  cityElement.innerHTML = city;

  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&metric=true`;

  axios.get(apiUrl).then(displayTemperature);
}
function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector(`#search-form`);
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);

const apiKey = "6208940cbe35a020d851d60539150bfc";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

const checkWeather = async (city) => {
  const response = await fetch(apiURL + city + `&appid=${apiKey}`);
  if(!response.ok) {
    document.querySelector('.error').style.display='block'; 
  document.querySelector('.weather').style.display='none';
} 
  else{
  let data = await response.json();
  console.log(data);
  document.querySelector(".city").textContent = data.name;
  document.querySelector(".temp").textContent = `${Math.round(
     data.main.temp
  )}°C`;
  document.querySelector(".humidity").textContent = `${data.main.humidity}%`;
  document.querySelector(".wind").textContent = `${data.wind.speed}Km/h`;

  switch (data.weather[0].main) {
    case "Clouds":
      weatherIcon.src = "images/clouds.png";
      break;
    case "Clear":
      weatherIcon.src = "images/clear.png";
      break;
    case "Rain":
      weatherIcon.src = "images/rain.png";
    case "Drizzle":
      weatherIcon.src = "images/drizzle.png";
      break;
    case "Mist":
      weatherIcon.src = "images/mist.png";

      break;

    default:
      break;
  }
document.querySelector('.weather').style.display = 'block';
document.querySelector('.error').style.display='none';
};
};

const settingCity = () => {
  checkWeather(searchBox.value);
};
searchBtn.addEventListener("click", settingCity);

const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");
const error404 = document.querySelector(".not-found");

search.addEventListener("click", () => {
  const APIKey = "fe7e3b4ce2484982af6105409232009";
  const city = document.querySelector(".search-box input").value;

  console.log(city);
  if (city === "") return;

  fetch(
    `http://api.weatherapi.com/v1/current.json?key=${APIKey}&q=${city}&aqi=no`
  )
    .then((response) => response.json())
    .then((json) => {
      if (1 == 1) {
        container.style.height = "400px";
        weatherBox.style.display = "none";
        weatherDetails.style.display = "none";
        error404.style.display = "block";
        error404.classList.add("fadeIn");
        return;
      }

      error404.style.display = "none";
      error404.classList.remove("fadeIn");

      const image = document.querySelector(".weather-box img");
      const temperature = document.querySelector(".weather-box .temperature");
      const omer = document.querySelector(".omer");
      console.log(omer);
      const description = document.querySelector(".weather-box .description");
      const humidity = document.querySelector(
        ".weather-details .humidity span"
      );
      const wind = document.querySelector(".weather-details .wind span");
      console.log(json.current.condition);
      const condition = json?.current?.condition;
      image.src = condition.icon;
      // switch (json.weather[0].main) {
      //   case "Clear":
      //     image.src = "images/clear.png";
      //     break;

      //   case "Rain":
      //     image.src = "images/rain.png";
      //     break;

      //   case "Snow":
      //     image.src = "images/snow.png";
      //     break;

      //   case "Clouds":
      //     image.src = "images/cloud.png";
      //     break;

      //   case "Haze":
      //     image.src = "images/mist.png";
      //     break;

      //   default:
      //     image.src = "";
      // }

      temperature.innerHTML = `${json.current.temp_c}<span>°C</span>`;
      description.innerHTML = `${condition.text}`;
      humidity.innerHTML = `${json.current.humidity}%`;
      wind.innerHTML = `${parseInt(json.current.wind_kph)}Km/h`;
      weatherBox.style.display = "";
      weatherDetails.style.display = "";
      weatherBox.classList.add("fadeIn");
      weatherDetails.classList.add("fadeIn");
      container.style.height = "590px";
    });
});

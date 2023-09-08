const apiKey = '9104b2f226c5f1e2ea771cdc8dad8622'; // Replace with your OpenWeatherMap API key

document.getElementById("search-btn").addEventListener("click", function () {
    const cityInput = document.getElementById("city-input").value;
    console.log(cityInput)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const cityName = data.name;
            const temperature = data.main.temp;
            const condition = data.weather[0].description;

            const weatherInfo = document.querySelector(".weather-info");
            weatherInfo.innerHTML = `
                <h2>${cityName}</h2>
                <p>Temperature: ${temperature}°C</p>
                <p>Condition: ${condition}</p>
            `;
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
});
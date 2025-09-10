async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "b23ec842a8dcf22fd7dcb140dfa9285f"; // 🔑 Replace with your OpenWeather API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      document.getElementById("weatherResult").innerHTML =
        `🌍 ${data.name}<br>🌡️ ${data.main.temp}°C<br>☁️ ${data.weather[0].description}`;
    } else {
      document.getElementById("weatherResult").innerText = "City not found!";
    }
  } catch (error) {
    document.getElementById("weatherResult").innerText = "Error fetching data!";
  }
}

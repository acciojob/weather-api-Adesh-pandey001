const API_KEY = 'YOUR_API_KEY_HERE'; // Replace with your actual API key

document.getElementById('getWeatherBtn').addEventListener('click', () => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Weather data not available');
      }
      return response.json();
    })
    .then(data => {
      const weather = data.weather[0].main;
      document.getElementById('weatherData').textContent = 
        `Current weather in London: ${weather}`;
    })
    .catch(error => {
      document.getElementById('weatherData').textContent = error.message;
    });
});

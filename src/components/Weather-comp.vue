<template>
  <div class="container">
    <h1>Weather App</h1>
    <div class="input-container">
      <input v-model="city" type="text" placeholder="Enter city name">
      <button @click="getWeather">Get Weather</button>
    </div>
    <div v-if="weather">
      <h2>{{ weather.name }} Weather</h2>
      <p>Temperature: {{ weather.main.temp }}°C</p>
      <p>Description: {{ weather.weather[0].description }}</p>
      <p>Wind Speed: {{ weather.wind.speed }} m/s</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: '',
      weather: null
    };
  },
  methods: {
    async getWeather() {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=f8db52fed2d6e9948fa9befe6ad6f076&units=metric`);
        const data = await response.json();
        this.weather = data;
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    }
  }
};
</script>

<style>
.container {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}
.input-container {
  margin-bottom: 20px;
}
input {
  padding: 8px;
  width: 200px;
  margin-right: 10px;
}
button {
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
</style>

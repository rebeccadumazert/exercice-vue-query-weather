<template>
  <div>
    <h1>WEATHER</h1>
    <div class="weatherContainer">
      <WeatherDetails v-for="(measureWeather, id) in weather" :weather="measureWeather" :key="id"></WeatherDetails>
    </div>
  </div>
</template>

<script>
import WeatherDetails from "./WeatherDetails";
import { getWeatherSrv } from "../services/WeatherSrv";
export default {
  name: "weather",
  components: {
    WeatherDetails
  },
  data: () => ({
    weather: []
  }),
  created() {
    this.getWeather();
  },
  methods: {
    getWeather: async function() {
      this.weather = await getWeatherSrv();
    }
  }
};
</script>

<style modul>
.weatherContainer {
  display: flex;
}
</style>

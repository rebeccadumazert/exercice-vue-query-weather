<template>
  <div class="containerDetails">
    <p>{{date}}</p>
    <p>{{weather.temp}}°C</p>
    <p>{{weather.weather.description}}</p>
    <p>hum : {{weather.humidity}}</p>
    <img :src="icon" alt />
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "WeatherDetails",
  props: ["weather"],
  created() {
    console.log(this.weather);
  },
  computed: {
    date: function() {
      return moment(this.weather.date, "X").format("DD/MM/YYYY h:00");
    },
    icon: function() {
      return `http://openweathermap.org/img/wn/${this.weather.weather.icon}@2x.png`;
    }
  }
  // methods: {
  //   formatDate() {
  //     this.date = moment(this.weather.dt_txt).format("DD/MM/YYYY h:00");
  //   },
  //   formatDescriptionAndIcon() {
  //     this.descriptionWeather = this.weather.weather[0];
  //     // this.icon = this.weather.weather.map(
  //     //   weather => `http://openweathermap.org/img/wn/${weather.icon}`
  //     // );
  //     console.log(this.descriptionWeather[0]);
  //   }
  // }
  //UTILISER COMPUTED !!!!!! WOOOOO
};
</script>

<style modul>
.containerDetails {
  margin: 1%;
  padding: 1%;
  border: solid black 1px;
}
</style>
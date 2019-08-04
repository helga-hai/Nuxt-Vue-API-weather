<template>
  <section class="container">
      <div class="infoblock" v-if="weather">
        <!-- <img :src="weather.Poster"> -->
        <div class="infoblock__head">
          <h1>{{weather.name}}</h1>
           
          <div class="mark">
            <img v-bind:src="`
          http://openweathermap.org/img/wn/${weather.weather.filter(item=>item.icon)[0].icon}@2x.png
          `" />
          {{weather.weather.filter(item=>item.icon)[0].main}}</div>
        </div>
        <div class="infoblock__detail">
          <div>Temperature: </div><div>{{weather.main.temp}} °C</div>
          <div>Atmospheric pressure: </div><div>{{weather.main.pressure}} hPa</div>
          <div>Humidity: </div><div>{{weather.main.humidity}} %</div>
          <div>Wind speed: </div><div>{{weather.wind.speed}} meter/sec</div>
          <div>Wind direction: </div><div>{{weather.wind.deg}}° </div>
          <!-- <div>{{weather.weather.main}}</div>
            <div><img v-bind:src="'http://openweathermap.org/img/wn/' + weather.weather.icon + '@2x.png'" /> </div> -->
        <!-- <button @click="getRandomMovie">Get Random Movie</button> -->
        </div>
      </div>
      <div v-else>
        <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
      </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  asyncData({ params }) {
    return axios.get(`http://localhost:3000/api/weather`).then(res => {
      return { weather: res.data }
    })
  },
  methods: {
    getRandomMovie() {
      axios.get(`api/weather`).then(res => {
        this.weather = res.data
      })
    }
  }
}
</script>

<style scss>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: sans-serif;
}
.infoblock {
    background: antiquewhite;
    padding: 10px 20px 15px;
}
.infoblock__head {
    margin-bottom: 20px;
    text-align: left;
}
.infoblock__head img {
    height: 38px;
    vertical-align: middle;
    display: inline-block;
}
.mark {
    background: burlywood;
    border-radius: 8px;
    display: inline-block;
    padding: 1px 15px 0 5px;
}
.infoblock__detail  {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 6px 16px;
    text-align: left;
}
.infoblock h1 {
    margin-top: 5px;
    display: inline-block;
    padding-right: 30px;
}
.infoblock button {
  margin-top: 15px;
  cursor: pointer;
}
</style>
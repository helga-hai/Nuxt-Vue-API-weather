<template>
    <div class="infoblock" v-if="this.model.name" :id="id">
        <div class="infoblock__head">

            <h1>{{this.model.name}}</h1>
           
            <div class="mark">
                <img v-bind:src="`
                http://openweathermap.org/img/wn/${this.model.weather.filter(item=>item.icon)[0].icon}@2x.png
                `" />
                {{this.model.weather.filter(item=>item.icon)[0].main}}
            </div>

        </div>
        <div class="infoblock__detail">
            
            <div v-if="this.model.main.temp">Temperature: </div>
            <div  v-if="this.model.main.temp">{{this.model.main.temp}} °C</div>

            <div v-if="this.model.main.pressure">Atmospheric pressure: </div>
            <div v-if="this.model.main.pressure">{{this.model.main.pressure}} hPa</div>

            <div v-if="this.model.main.humidity">Humidity: </div>
            <div v-if="this.model.main.humidity">{{this.model.main.humidity}} %</div>

            <div v-if="this.model.wind.speed">Wind speed: </div>
            <div v-if="this.model.wind.speed">{{this.model.wind.speed}} meter/sec</div>

            <div v-if="this.model.wind.deg">Wind direction: </div>
            <div v-if="this.model.wind.deg">{{this.model.wind.deg}}° </div>

        </div>
    </div>
    <div v-else>
        <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            baseUrl: "http://localhost:3000/api/weather/",
            model: {
                weather: {
                    main: String,
                    description: String,
                    icon: String
                },
                main: {
                    temp: Number,
                    pressure: Number,
                    humidity: Number
                },
                wind: {
                    speed: Number,
                    deg: Number
                }
            }
        }
    },
    props: {
        id: String,
    },
    computed: {
        url(){
            return this.baseUrl + this.id;
        },
    },
    created() {
        this.getData(this.url);
    },
    methods: {
        getData(url) {
            fetch(url)
            .then(res=>res.json())
            .then(data => {
                this.model = data;
            })
            .catch(function(ex) {
                console.log("fetch data failed", ex);
            });
        }
    }
}
</script>

<style>
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
.mark span {
    font-size: 15px;
    display: inline-block;
    vertical-align: middle;
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
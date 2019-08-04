const express = require('express')
const app = express();

app.get('/', (req, res, next) => {
    res.send('API root')
});

function allAPI() {
    // const ids = {
    //     'kyiv': '703448',
    //     'london': '2643743',
    //     'newyork': '5128638'
    // }
    const ids = ['703448', '2643743', '5128638'];
    for (let i = 0; i < ids.length; i++) {
        app.get('/weather/' + ids[i], async(req, res, next) => {
            const axios = require('axios')
            const weatherID = '';
            let weather = await axios.get(
                `http://api.openweathermap.org/data/2.5/weather?id=${ids[i]}&units=metric&APPID=1d21376b7c4adcdfed26ccf75a120171`
            )
            res.json(weather.data)
        });
    }
}
allAPI();

//export the server middleware 

module.exports = {
    path: '/api',
    handler: app
}
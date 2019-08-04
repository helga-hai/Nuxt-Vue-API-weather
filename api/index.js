const express = require('express')
const app = express()
app.get('/', (req, res, next) => {
    res.send('API root')
})
const cityOptions = {
    'kyiv': 703448,
    'London': 2643744,
    'New York': 5128638
}
app.get('/weather', async(req, res, next) => {
    const axios = require('axios')

    const weatherID = '';
    const weather = await axios.get(
        'http://api.openweathermap.org/data/2.5/weather?id=703448&units=metric&APPID=1d21376b7c4adcdfed26ccf75a120171'
    )
    res.json(weather.data)
});

//export the server middleware 

module.exports = {
    path: '/api',
    handler: app

}
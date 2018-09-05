const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=eb325b6f39366b5518475202cb0c21e6`)
    return resp.data.main.temp;

}
module.exports = {
    getClima
}
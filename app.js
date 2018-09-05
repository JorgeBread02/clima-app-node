//const axios = require('axios');
const clima = require('./clima/clima');
const lugar = require('./lugar/lugar');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true

    }
}).argv;
let getInfo = async(direccion) => {
    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);
        return `El clima en ${coors.direccion} es de ${temp}`;

    } catch (e) {
        return `No se pudo determinar el cima en ${direccion}`

    }


}
getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));
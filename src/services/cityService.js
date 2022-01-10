import axios from 'axios'
const API_KEY = '9cff733aee57cb05b63dd4f731c46bc4';
const API_URL = 'https://api.openweathermap.org/data/2.5/forecast?units=metric&id='

export const cityService = {
    query,
    getCities,
}

async function query(id) {
    let city;
    try {
        city = await axios.get(`${API_URL}${id}&appid=${API_KEY}`).then(res =>
            res.data);
        return city;
    }
    catch (err) {
        console.log('Could not load city');
    }
}

async function getCities() {
    const cityIds = getRandomCityIds();
    const cities = await Promise.all(cityIds.map(
        async id => await query(id)
    ));
    return cities;
}

function getRandomCityIds() {
    /// Couldn't find the api's path to get several cities so manualy written city ids
    const ids = [18918, 2110959, 4177908, 23814, 32723, 41210, 52867, 53157, 53654, 56166, 2967297, 2967319, 2967325, 2967337, 4115181, 4116660, 4118277, 4119972, 4120323, 4120388, 4120544, 4122218]

    let randmonized = [];
    while (randmonized.length < 5) {
        const id = ids[getRandomInt(0, ids.length - 1)]
        if (!randmonized.includes(id)) randmonized.push(id)
    }
    return randmonized;
}

function getRandomInt(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}
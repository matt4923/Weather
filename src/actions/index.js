//action creator
import axios from 'axios';

const API_KEY = '86984ebc3fbf9016543462edf0617731';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url); //returns promise -- https://www.fullstackreact.com/30-days-of-react/day-15/

    console.log('Request:', request); 

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}

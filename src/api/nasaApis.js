import axios from 'axios';

export function getAstronomyPictureOfTheDay() {
    return axios.get(`https://api.nasa.gov/planetary/apod?api_key=FIXME`);
}

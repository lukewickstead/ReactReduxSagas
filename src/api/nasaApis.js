import axios from 'axios';
import { NASA_API_KEY} from './apiKeys'
export function getAstronomyPictureOfTheDay() {
    return axios.get(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}&date=2018-1-2`);
}

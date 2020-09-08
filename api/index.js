import axios from 'axios'
import { apiWeather } from '../key'

const getCityDataByCoordinate = (lat, log) => axios.get(
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${apiWeather}`,
)

const getCityDataByName = cityName => axios.get(
  `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiWeather}`,
)

export default { getCityDataByCoordinate, getCityDataByName }

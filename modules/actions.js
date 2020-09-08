import api from '../api'
import { SET_DATA_WEATHER_NAME_CITY } from './constants'

const getCityDataByNameAction = payload => ({ type: SET_DATA_WEATHER_NAME_CITY, payload })

export const getCityDataByCoordinate = (lat, log) => dispatch => api.getCityDataByCoordinate(lat, log)
  .then(({ data }) => dispatch(getCityDataByNameAction(data)))

export const getCityDataByName = nameCity => dispatch => api.getCityDataByName(nameCity)
  .then(({ data }) => dispatch(getCityDataByNameAction(data)))
  
import { SET_DATA_WEATHER_NAME_CITY } from './constants'

export const sessionInitialState = {
  currentDataWeather: null ,
}

export const sessionReducer = (state = sessionInitialState, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_DATA_WEATHER_NAME_CITY: 
      return { ...state, currentDataWeather: payload }
    default:
      return { ...state }
  }
}

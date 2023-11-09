import { strings } from '../localization';

export const TYPES = {
  CLEAR_STORE: 'CLEAR_STORE',
  WEATHER: 'WEATHER',
  WEATHER_REQUEST: 'WEATHER_REQUEST',
  WEATHER_ERROR: 'WEATHER_ERROR',
  WEATHER_SUCCESS: 'WEATHER_SUCCESS',
};

const WeatherRequest = () => ({
  type: TYPES.WEATHER_REQUEST,
  payload: null,
});

const WeatherSuccess = (weatherData) => ({
  type: TYPES.WEATHER_SUCCESS,
  payload: { weatherData },
});

const WeatherError = (error) => ({
  type: TYPES.WEATHER_ERROR,
  payload: { error },
});


export const SetWeatherData = (data) => async (dispatch) => {
  console.log("setting data", data);
  dispatch(WeatherRequest());
  try {
    dispatch(WeatherSuccess(data));
  } catch ({ message }) {
    dispatch(WeatherError(message));
  }
};


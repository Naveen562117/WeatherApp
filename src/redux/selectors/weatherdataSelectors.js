export const getWeatherdata = (state) => {
  return Object.keys(state.weatherdata).length > 0 ? state.weatherdata : null;
};

import { TYPES } from '../actions/weatherdataActions';

export const weatherdataReducer = (state = {}, { payload, type }) => {
  switch (type) {
    case TYPES.WEATHER_SUCCESS:
      return { ...payload };
    case TYPES.CLEAR_STORE:
      return {};
    default:
      return state;
  }
};

import { routes } from './routes';

export class weatherDataController {
  constructor(networkService) {
    this.networkService = networkService;
  }

  getweatherData({ username, password, demoMode }) {
    return this.networkService.request({
      method: 'POST',
      url: routes.weatherData,
      data: { username, password },
    });
  }

}

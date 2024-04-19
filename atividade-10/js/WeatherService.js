class WeatherService {
  constructor() {
      this.weatherModel = new WeatherModel();
  }

  async fetchWeatherData(cidade) {
      return await this.weatherModel.getWeatherData(cidade);
  }
}

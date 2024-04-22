class WeatherController {
  constructor() {

      this.weatherModel = new WeatherModel();
      this.weatherView = new WeatherView();

      this.buscarBtn = document.querySelector('.buscar-btn');
      this.cidadeInputEl = document.querySelector('.busca-cidade');

      this.buscarBtn.addEventListener('click', () => {
          this.showWeatherData();
      });
  }

   async showWeatherData() {
        const cidade = this.cidadeInputEl.value;
        try {
            const data = await this.weatherModel.getWeatherData(cidade);
            this.weatherView.displayWeatherData(data);
        } catch (error) {
            this.weatherView.displayErrorMessage(error.message);
        }
    }
}

const weatherController = new WeatherController();

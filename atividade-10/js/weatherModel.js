class WeatherModel {
  constructor() {
      this.apiKey = 'e5e130353b359425b218751f1bb1e2ec';
  }

  async getWeatherData(cidade) {
      const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${this.apiKey}&lang=pt_br`;
      const res = await fetch(apiWeatherURL);
      const data = await res.json();

      if (data.cod && data.cod === "404") {
        throw new Error("Cidade não encontrada");
    }

      return data;
  }
}

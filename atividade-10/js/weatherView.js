class WeatherView {
    constructor() {
        this.cidadeNomeEl = document.querySelector('.nome-cidade');
        this.temperaturaEl = document.querySelector('.temperatura-cidade');
        this.climaDescEl = document.querySelector('.clima-desc');
        this.iconDescEl = document.querySelector('.icon-clima');
        this.umidadeDescEl = document.querySelector('.umidade-desc');
        this.ventoDescEl = document.querySelector('.vento-desc');
    }

    displayWeatherData(data) {

        const tempParse = parseInt(data.main.temp);

        this.cidadeNomeEl.innerHTML = `<h2>${data.name}</h2>`;

        this.temperaturaEl.innerHTML = `<h2>${tempParse}°C</h2>`;

        this.climaDescEl.innerHTML = `<p>${data.weather[0].description}</p>`;

        this.iconDescEl.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
        
        this.umidadeDescEl.innerHTML = 
        `
        <img src="./css/images/umidade.png" alt="">
        <p>${data.main.humidity}%</p>
        `;

        this.ventoDescEl.innerHTML = 
        `
        <img src="./css/images/vento.png" alt="">
        <p>${data.wind.speed}km/h</p>
        `;
    }
}

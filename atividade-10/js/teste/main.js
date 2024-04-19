const myKeyApi = 'e5e130353b359425b218751f1bb1e2ec';

const cidadeInputEl = document.querySelector('.busca-cidade');
const buscarBtn = document.querySelector('.buscar-btn');

const cidadeNomeEl = document.querySelector('.nome-cidade')
const temperaturaEl = document.querySelector('.temperatura-cidade')
const climaDescEl = document.querySelector('.clima-desc')
const iconDescEl = document.querySelector('.icon-clima')
const umidadeDescEl = document.querySelector('.umidade-desc')
const ventoDescEl = document.querySelector('.vento-desc')


const getWeatherData = async(cidade) => {

    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${myKeyApi}&lang=pt_br`;

    const res = await fetch(apiWeatherURL)
    const data = await res.json();

    return data
}


const showWeatherData = async (cidade) => {

    const data = await getWeatherData(cidade);
    const tempParse = parseInt(data.main.temp);

    cidadeNomeEl.innerHTML = `<h2>${data.name}</h2>`;

    temperaturaEl.innerHTML = `<h2>${tempParse}°C</h2>`;

    climaDescEl.innerHTML = `<p>${data.weather[0].description}</p>`;

    iconDescEl.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
    
    umidadeDescEl.innerHTML = 
    `
    <img src="./css/images/umidade.png" alt="">
    <p>${data.main.humidity}%</p>
    `;

    ventoDescEl.innerHTML = 
    `
    <img src="./css/images/vento.png" alt="">
    <p>${data.wind.speed}km/h</p>
    `;
}


buscarBtn.addEventListener('click', () => {

    const cidade = cidadeInputEl.value;

    showWeatherData(cidade)

})
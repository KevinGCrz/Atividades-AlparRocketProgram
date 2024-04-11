const pokemonName = document.querySelector('.nomepokemon')
const pokemonID = document.querySelector('.nomepokemon')
const pokemonImage = document.querySelector('.artpokemon')
const pokemonStatus = document.querySelector('.status')
const pokemonDesc = document.querySelector('.desc-pokemon')
const pokeCor = document.querySelector('.cor-pokemon')

const form = document.querySelector('.form')
const input = document.querySelector('.search')

const btnPrev = document.querySelector('.seta-esquerda')
const btnNext = document.querySelector('.seta-direita')
const btnBusca = document.querySelector('.btn-buscar')

let searchPokemon = 1;

const fetchPokemon = async (pokemon) => {

    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if(APIResponse.status === 200){
        const data = await APIResponse.json();
        return data
    }

}


const renderPokemon = async (pokemon) => {

    pokemonName.innerHTML = `<p>Carregando...</p>`;

    const data = await fetchPokemon(pokemon)

    

    if(data){

        const speciePesponse = await fetch(data.species.url)
        data.species = await speciePesponse.json()

        const textFlavor = data.species.flavor_text_entries.find(item => {
            if(item.language.name == 'en'){
                return true
            }
            return false
        })

        const text = textFlavor.flavor_text
        .replaceAll("\n", '')
        .replaceAll("\t", '')
        .replaceAll("", '')

        pokemonName.innerHTML = `<p>${data.name}</p>
        <p>#${data.id}</p>`;

        pokemonImage.style.display = 'inline';
        pokemonImage.src = data.sprites.other['official-artwork']['front_default'];


        const tags = data.types.map((item)=>{
            return item.type.name
        })
        const tag = tags[0]

        pokemonStatus.innerHTML =
        `
        <div class="info">
            <p>Altura: ${data.height / 10} M</p>
            <p>Peso: ${data.weight / 10} Kg</p>
        </div>

        <div class="tipo-pokemon">
        ${
            tags.map(tag => 
                `
                <div class="tag ${tag}-p">
                <p>${tag}</p>
                </div>
                `
            ).join('')
        }
        </div>
        `

        pokemonDesc.innerHTML =
        `
        <p>${text}</p>
        `

        input.value = '';
        searchPokemon = data.id;

        pokeCor.innerHTML = 
        `
        <div class="cor-pokemon ${tag}">
        </div>
        `

    }else{

        pokeCor.innerHTML = 
        `
        <div class="cor-pokemon default">
        </div>
        `

        pokemonName.innerHTML = `<p>O pokémon não foi encontrado :(</p>`;
        pokemonImage.style.display = 'none';

        pokemonStatus.innerHTML =
        `
        <div class="info">
            <p></p>
        </div>

        <div class="tipo-pokemon">
            <p></p>
        </div>
        `

        pokemonDesc.innerHTML =
        `
        <p></p>
        `

    }


}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());
});


btnBusca.addEventListener('click', () => {
    if(input.value){
        renderPokemon(input.value.toLowerCase());
    }
});
btnPrev.addEventListener('click', () => {
    if(searchPokemon > 1)
    {
        searchPokemon -= 1;
        renderPokemon(searchPokemon);    
    }
});

btnNext.addEventListener('click', () => {
    if(searchPokemon < 1025)
    {
        searchPokemon += 1;
        renderPokemon(searchPokemon);  
    }
});

renderPokemon(searchPokemon)

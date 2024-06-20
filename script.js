const pokedexBtn = document.querySelector("#pokedex");

async function getPokemonData(limit, offset) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
        const pokemonData = await response.json();

        console.log(pokemonData);
        makePokedexEntries(pokemonData);
    } catch (error) {
        console.error("Error fetching Pokemon data from API: ", error);
    }
}

function makePokedexEntries(pokemonData) {
    const pokedexContainer = document.querySelector("#pokedex-wrapper");
    
    for (let i = 0; i < pokemonData.results.length; i++) {
        const pokedexEntryContainer = document.createElement("div");
        const pokemonName = document.createElement("h2");
        const pTag = document.createElement("p");
        pTag.textContent = `# ${i}`
        pokedexEntryContainer.classList.add("pokedex-card");

        pokemonName.textContent = pokemonData.results[i].name.charAt(0).toUpperCase() + pokemonData.results[i].name.slice(1);
        pokedexEntryContainer.appendChild(pTag);
        pokedexEntryContainer.appendChild(pokemonName);
        pokedexContainer.appendChild(pokedexEntryContainer);
    }
}

pokedexBtn.addEventListener('click', getPokemonData(12, 0));

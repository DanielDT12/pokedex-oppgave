const searchInput = document.querySelector("#search-input");

searchInput.addEventListener('keyup', (event) => {
    if (event.key === "Enter") {
        getPokemonData(event.target.value.toLowerCase());
    }
})

async function getPokemonData(pokeName) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
        const pokemonData = await response.json();
        if (!response.ok) {
            throw new Error("Network did not respond with HTTP code 200");
        }

        console.log(pokemonData);
        makePokedexEntries(pokemonData);
    } catch (error) {
        console.error("Error fetching Pokemon data from API: ", error);
    }
}

function makePokedexEntries(pokemonData) {
    const pokedexContainer = document.querySelector("#pokedex-wrapper");
    pokedexContainer.textContent = "";

    const pokemonName = document.createElement("h2");
    pokemonName.textContent = pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1);
    pokedexContainer.appendChild(pokemonName);

    const pokemonId = document.createElement("p");
    pokemonId.textContent = `# ${pokemonData.id}`;
    pokedexContainer.appendChild(pokemonId);

    const pokemonType = document.createElement("p");
    const pokemonSecondType = document.createElement("p");
    pokemonType.classList.add("pokemon-type");
    pokemonSecondType.classList.add("pokemon-second-type");

    if (pokemonData.types.length < 2) {
        pokemonType.textContent = pokemonData.types[0].type.name.charAt(0).toUpperCase() + pokemonData.types[0].type.name.slice(1);
        pokemonSecondType.textContent = "";
        pokedexContainer.appendChild(pokemonType);
    } else {
        pokemonType.textContent = pokemonData.types[0].type.name.charAt(0).toUpperCase() + pokemonData.types[0].type.name.slice(1);
        pokemonSecondType.textContent = pokemonData.types[1].type.name.charAt(0).toUpperCase() + pokemonData.types[1].type.name.slice(1);;
        pokedexContainer.appendChild(pokemonType);
        pokedexContainer.appendChild(pokemonSecondType);
    }

    const pokemonSprite = document.createElement("img");
    const pokemonShinySprite = document.createElement("img");
    pokemonSprite.src = pokemonData.sprites.front_default;
    pokemonSprite.alt = pokemonData.name
    pokedexContainer.appendChild(pokemonSprite);
}
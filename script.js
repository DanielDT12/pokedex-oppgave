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

        // console.log(pokemonData); display, JSON object in console.
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

    switch(pokemonType.textContent) {
        case "Grass":
            pokemonType.classList.add("grass-type");
            break;
        case "Fire":
            pokemonType.classList.add("fire-type");
            break;
        case "Water":
            pokemonType.classList.add("-type");
            break;
        case "Electric":
            pokemonType.classList.add("electric-type");
            break;
        case "Normal":
            pokemonType.classList.add("normal-type");
            break;
        case "Ice":
            pokemonType.classList.add("ice-type");
            break;
        case "Fighting":
            pokemonType.classList.add("fighting-type");
            break;
        case "Poison":
            pokemonType.classList.add("poison-type");
            break;
        case "Ground":
            pokemonType.classList.add("ground-type");
            break;
        case "Flying":
            pokemonType.classList.add("flying-type");
            break;
        case "Psychic":
            pokemonType.classList.add("psychic-type");
            break;
        case "Bug":
            pokemonType.classList.add("bug-type");
            break;
        case "Rock":
            pokemonType.classList.add("rock-type");
            break;
        case "Ghost":
            pokemonType.classList.add("ghost-type");
            break;
        case "Dragon":
            pokemonType.classList.add("dragon-type");
            break;
        case "Dark":
            pokemonType.classList.add("dark-type");
            break;
        case "Steel":
            pokemonType.classList.add("steel-type");
            break;
        case "Fairy":
            pokemonType.classList.add("fairy-type");
            break;
        default:
            console.log("Type not found or something went wrong.");
    }

    switch(pokemonSecondType.textContent) {
        case "Grass":
            pokemonSecondType.classList.add("grass-type");
            break;
        case "Fire":
            pokemonSecondType.classList.add("fire-type");
            break;
        case "Water":
            pokemonSecondType.classList.add("-type");
            break;
        case "Electric":
            pokemonSecondType.classList.add("electric-type");
            break;
        case "Normal":
            pokemonSecondType.classList.add("normal-type");
            break;
        case "Ice":
            pokemonSecondType.classList.add("ice-type");
            break;
        case "Fighting":
            pokemonSecondType.classList.add("fighting-type");
            break;
        case "Poison":
            pokemonSecondType.classList.add("poison-type");
            break;
        case "Ground":
            pokemonSecondType.classList.add("ground-type");
            break;
        case "Flying":
            pokemonSecondType.classList.add("flying-type");
            break;
        case "Psychic":
            pokemonSecondType.classList.add("psychic-type");
            break;
        case "Bug":
            pokemonSecondType.classList.add("bug-type");
            break;
        case "Rock":
            pokemonSecondType.classList.add("rock-type");
            break;
        case "Ghost":
            pokemonSecondType.classList.add("ghost-type");
            break;
        case "Dragon":
            pokemonSecondType.classList.add("dragon-type");
            break;
        case "Dark":
            pokemonSecondType.classList.add("dark-type");
            break;
        case "Steel":
            pokemonSecondType.classList.add("steel-type");
            break;
        case "Fairy":
            pokemonSecondType.classList.add("fairy-type");
            break;
        default:
            console.log("Type not found or something went wrong.");
    }

    const pokemonSprite = document.createElement("img");
    pokemonSprite.src = pokemonData.sprites.front_default;
    pokemonSprite.alt = pokemonData.name
    pokedexContainer.appendChild(pokemonSprite);

    const pokemonStatNameArray = pokemonData.stats.map((statName) => statName.stat.name);
    const pokemonStatNumberArray = pokemonData.stats.map((statNumber) => statNumber.base_stat);
    
    for (let i = 0; i < pokemonStatNameArray.length; i++) {
        const pokemonStatContainer = document.createElement("div");
        const pokemonStatName = document.createElement("p");
        const pokemonStatNumber = document.createElement("p");
        pokemonStatContainer.classList.add("pokemon-stats");

        pokemonStatName.textContent = `${pokemonStatNameArray[i].charAt(0).toUpperCase() + pokemonStatNameArray[i].slice(1)} :`;
        pokemonStatNumber.textContent = `${pokemonStatNumberArray[i]}`;
        pokemonStatContainer.appendChild(pokemonStatName);
        pokemonStatContainer.appendChild(pokemonStatNumber);
        pokedexContainer.appendChild(pokemonStatContainer);
    }
}
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const pokemonName = document.getElementById('pokemon-name');
const pokemonId = document.getElementById('pokemon-id');
const weight = document.getElementById('weight');
const height = document.getElementById('height');
const hp = document.getElementById('hp');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const specialAttack = document.getElementById('special-attack');
const specialDefense = document.getElementById('special-defense');
const speed = document.getElementById('speed');
const types = document.getElementById('types');
const sprite = document.getElementById('sprite');

searchButton.addEventListener('click', async () => {
  const searchValue = searchInput.value.trim().toLowerCase(); // Convert search value to lowercase
  if (searchValue === 'pikachu') {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`);
    const data = await response.json();
    if (data) {
      displayPokemon(data);
    } else {
      alert('Pokémon not found');
    }
  } else if (searchValue === '94') { // Add condition for searching by ID 94
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/94`);
    const data = await response.json();
    if (data) {
      displayPokemon(data);
    } else {
      alert('Pokémon not found');
    }
  } else {
    alert('Pokémon not found');
  }
});

function displayPokemon(data) {
  // Display the values in the corresponding elements
  pokemonName.textContent = data.name.toUpperCase();
  pokemonId.textContent = `#${data.id}`;
  weight.textContent = `${data.weight}`;
  height.textContent = `${data.height}`;
  hp.textContent = data.stats[0].base_stat;
  attack.textContent = data.stats[1].base_stat;
  defense.textContent = data.stats[2].base_stat;
  specialAttack.textContent = data.stats[3].base_stat;
  specialDefense.textContent = data.stats[4].base_stat;
  speed.textContent = data.stats[5].base_stat;

  // Clear types content
  types.innerHTML = '';

  // Add types
  data.types.forEach((type) => {
    const typeElement = document.createElement('div');
    typeElement.textContent = type.type.name.toUpperCase();
    types.appendChild(typeElement);
  });

  // Set sprite
  sprite.src = data.sprites.front_default;
  sprite.classList.remove('hidden');

  
  document.getElementById('search-result').classList.remove('hidden');
}

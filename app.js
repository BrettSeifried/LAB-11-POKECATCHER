// import functions and grab DOM elements
import pokemon from './pokemon.js';
console.log(pokemon);
// initialize global state
const pokemon1Img = document.getElementById('pokemon-1-img');
const pokemon2Img = document.getElementById('pokemon-2-img');
const pokemon3Img = document.getElementById('pokemon-3-img');

const generatePokemon = () => {
    let randNum1 = Math.floor(Math.random() * pokemon.length);
    let randNum2 = Math.floor(Math.random() * pokemon.length);
    let randNum3 = Math.floor(Math.random() * pokemon.length);

    while (
        randNum1 === randNum2 ||
        randNum1 === randNum3 ||
        randNum2 === randNum3
    ) {
        randNum1 = Math.floor(Math.random() * pokemon.length);
        randNum2 = Math.floor(Math.random() * pokemon.length);
        randNum3 = Math.floor(Math.random() * pokemon.length);
    }

    let poke1 = pokemon[randNum1];
    pokemon1Img.src = poke1.url_image;
    let poke2 = pokemon[randNum2];
    pokemon2Img.src = poke2.url_image;
    let poke3 = pokemon[randNum3];
    pokemon3Img.src = poke3.url_image;
};

generatePokemon();


// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

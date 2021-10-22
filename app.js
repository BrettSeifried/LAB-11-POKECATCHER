// import functions and grab DOM elements
import pokemon from './pokemon.js';
import { catchPokemon, encounterPokemon } from './utils.js';
// initialize global state
const pokemon1Img = document.getElementById('pokemon-1-img');
const pokemon2Img = document.getElementById('pokemon-2-img');
const pokemon3Img = document.getElementById('pokemon-3-img');
const poke1Radio = document.getElementById('poke-1-radio');
const poke2Radio = document.getElementById('poke-2-radio');
const poke3Radio = document.getElementById('poke-3-radio');

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
    encounterPokemon(poke1.id);
    pokemon1Img.src = poke1.url_image;
    poke1Radio.value = poke1.id;

    let poke2 = pokemon[randNum2];
    encounterPokemon(poke2.id);
    pokemon2Img.src = poke2.url_image;
    poke2Radio.value = poke2.id;

    let poke3 = pokemon[randNum3];
    encounterPokemon(poke3.id);
    pokemon3Img.src = poke3.url_image;
    poke3Radio.value = poke3.id;
};

generatePokemon();
const button = document.getElementById('submit');
let numGuess = 10;

button.addEventListener('click', () => {
    const chosenRadio = document.querySelector('input[type=radio]:checked');
    const pokeID = Number(chosenRadio.value);
    if (chosenRadio) {
        numGuess--;
        catchPokemon(pokeID);
        if (numGuess === 0){
            window.location.href = './results/index.html';
        } else {
            generatePokemon();
        }
    } else {
        alert (' You did not Select a Pokemon!');
    }
});


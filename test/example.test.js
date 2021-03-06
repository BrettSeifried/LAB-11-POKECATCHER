// IMPORT MODULES under test here:
// import { generatePokemon } from '../app.js';
import { encounterPokemon, findById, getPokedex, setPokedex, catchPokemon } from '../utils.js';
import pokemon from '../pokemon.js';
// import { example } from '../example.js';

const test = QUnit.test;

test('finds pokemon by id', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        _id:'5cef3501ef6005a77cd4fd17',
        'pokemon':'bulbasaur',
        id: 1,
        'species_id':1,
        'height':7,
        'weight':69,
        'base_experience':64,
        'type_1':'grass',
        'type_2':'poison',
        'attack':49,
        'defense':49,
        'hp':45,
        'special_attack':65,
        'special_defense':65,
        'speed':45,
        'ability_1':'overgrow',
        'ability_2':'NA',
        'ability_hidden':'chlorophyll',
        'color_1':'#78C850',
        'color_2':'#A040A0',
        'color_f':'#81A763',
        'egg_group_1':'monster',
        'egg_group_2':'plant',
        'url_image':'http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
        'generation_id':1,
        'evolves_from_species_id':'NA',
        'evolution_chain_id':1,
        'shape_id':8,
        'shape':'quadruped',
        'pokebase':'bulbasaur',
        'pokedex':'http://www.pokemon.com/us/pokedex/bulbasaur'
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(pokemon, 1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('getPokedex should return an array if it exists', (expect) =>{
    const fakeDex = [
        { id: 'bulbasaur', encounter: 4, caught: 2 },
        { id: 'ivysaur', encounter: 2, caught: 1 }
    ];
    localStorage.setItem('DEX', JSON.stringify(fakeDex));
    const dex = getPokedex();
    expect.deepEqual(dex, fakeDex);
});

test('getPokedex should return an empty if the cart does not exist', (expect) => {
    localStorage.removeItem('DEX');
    const dex = [];
    const newDex = getPokedex();
    expect.deepEqual(newDex, dex);
});

test('setPokedex should create an array to local storage', (expect) => {
    localStorage.removeItem('DEX');
    const fakeDex = [
        { id: 'bulbasaur', encountered: 4, caught: 2 },
        { id: 'ivysaur', encountered: 2, caught: 1 }
    ];

    //ACT
    setPokedex(fakeDex);
    const dex = getPokedex();

    expect.deepEqual(dex, fakeDex);
});

test('encounterPokemon: encounter should increment by 1', (expect) => {
    const fakeDex = [
        { id: 1, encountered: 4, caught: 2 },
    ];
    localStorage.setItem('DEX', JSON.stringify(fakeDex));
    const dex = [
        { id: 1, encountered: 5, caught: 2 },
    ];

    //ACT
    encounterPokemon(1);
    const actual = getPokedex();
    expect.deepEqual(dex, actual);
});


test('catchPokemon increments caught by one', (expect) => {
    localStorage.removeItem('DEX');
    const fakeDex = [
        { id: 1, encounter: 4, caught: 2 },
    ];
    localStorage.setItem('DEX', JSON.stringify(fakeDex));
    const dex = [
        { id: 1, encounter: 4, caught: 3 },
    ];

    //ACT
    catchPokemon(1);
    const actual = getPokedex();
    expect.deepEqual(dex, actual);
});


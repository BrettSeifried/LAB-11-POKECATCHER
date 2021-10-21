// IMPORT MODULES under test here:
// import { generatePokemon } from '../app.js';
import { encounterPokemon, findById, getPokedex, setPokedex } from '../utils.js';
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
    const actual = findById(1, pokemon);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('getPokedex should return encounters if they are there', (expect) =>{
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
    const dex = getPokedex();
    expect.deepEqual(dex, []);
});

test('increment encounter', (expect) => {
    let fakeDex = [
        { id: 1, encounter: 4, caught: 2 },
        { id: 2, encounter: 2, caught: 1 }
    ];
    setPokedex(fakeDex);

    encounterPokemon(1);

    const newPoke = getPokedex();
    const actual = newPoke[0].encounter === 1;
    expect.equal(actual, true);
});


test(' setPokedex will increment', (expect) => {
    localStorage.removeItem('DEX');
    const fakeDex = [
        { id: 1, encounter: 4, caught: 2 },
        { id: 2, encounter: 2, caught: 1 }
    ];
    localStorage.setItem('DEX', JSON.stringify(fakeDex));
    setPokedex(1);
    const dex = getPokedex();
    const expected = [
        { id: 1, encounter: 5, caught: 2 },
        { id: 2, encounter: 3, caught: 1 }
    ];

    expect.deepEqual(dex, expected);
});


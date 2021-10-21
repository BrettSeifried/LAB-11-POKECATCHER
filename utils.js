import pokemon from './pokemon.js';

export function findById(id, items){
    for (let item of items){
        if (item.id === id){
            return item;
        }
    }
}

export function getPokedex() {
    const dexString = localStorage.getItem('DEX') || '[]';
    const dex = JSON.parse(dexString);
    return dex;
}

// export function setPokedex(id) {
//     const dex = getPokedex();
//     const dexItem = findById(id, dex);
//     if (dexItem){
//         const newEncounter = { id: id, encounter: 1, caught: 0 };
//         dex.push(newEncounter);
//     } else {
//         dexItem.encounter++;
//     }
//     dexItem.caught++;

//     const stringDex = JSON.stringify(dex);
//     localStorage.setItem('DEX', stringDex);
// }

export function catchPokemon(id) {
    const dex = getPokedex();

    const pokeObj = findById(dex, id);

    pokeObj.caught++;
    setPokedex(dex);
}

export function encounterPokemon(id) {
    const dex = getPokedex();
    
    const pokeObj = findById(dex, id);
    let newPoke = findById(pokemon, id);
    if (pokeObj) {
        pokeObj.encounter++;
    } else {
        dex.push({
            id: id,
            encountered: 1,
            captured: 0,
            name: newPoke.pokemon
        });
    }
    setPokedex(dex);
}
export function setPokedex(id) {
    const dexString = JSON.stringify(id);
    localStorage.setItem('DEX', dexString);
}
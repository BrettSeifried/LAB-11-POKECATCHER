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

export function setPokedex(id) {
    const dexString = JSON.stringify(id);
    localStorage.setItem('DEX', dexString);
}

export function encounterPokemon(id) {
    // GET
    let dex = getPokedex();
    const poke = findById(id, dex);
    // MODIFY
    if (poke){
        poke.encounter++;
    } else {
        const newPokemon = { id: id, encountered: 1, caught: 0 };
        results.push(newPokemon);
    }
    
    setPokedex(dex);
}

export function catchPokemon(id) {
    const dex = getPokedex();
    const pokeCaught = findById(id, dex);

    pokeCaught.caught++;
    setPokedex(dex);
}

export function findById(items, id){
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
    let poke = findById(dex, id);
    // MODIFY
    if (poke){
        poke.encountered++;
    } else {
        const newPokemon = { id: id, encountered: 1, caught: 0 };
        dex.push(newPokemon);
    }
    
    setPokedex(dex);
}

export function catchPokemon(id) {
    let dex = getPokedex();
    let pokeCaught = findById(dex, id);

    pokeCaught.caught++;
    setPokedex(dex);
}

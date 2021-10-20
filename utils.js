import pokemon from './pokemon.js';

export function findById(id, items){
    for (let item of items){
        if (item.id === id){
            return item;
        }
    }
}

// export function getPokedex() {
//     const dexString = localStorage.
// }
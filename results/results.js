import pokemon from '../pokemon.js';
import { getPokedex, findById } from '../utils.js';

const dex = getPokedex();
const main = document.getElementById('main');


for (let item of dex){
    const pokes = findById(pokemon, item.id);
    const div = document.createElement('div');

    const img = document.createElement('img');
    img.src = `${pokes.url_image}`;

    const header = document.createElement('h2');
    header.textContent = pokes.pokemon;

    const resultSpan1 = document.createElement('span');
    resultSpan1.textContent = `Encountered: ${item.encountered}`;
    
    const resultSpan2 = document.createElement('span');
    resultSpan2.textContent = `Caught: ${item.caught}`;

    div.append(header, img, resultSpan1, resultSpan2);
    main.append(div);

}

const names = dex.map((item)=>{
    const poke = findById(pokemon, item.id);
    return poke.pokemon;
});

const caught = dex.map(item=>item.caught);

var ctx = document.getElementById('resultsChart').getContext('2d');
// eslint-disable-next-line no-undef
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: names,
        datasets: [{
            label: 'Times Caught',
            data: caught,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

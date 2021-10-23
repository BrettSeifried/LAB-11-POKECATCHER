import pokemon from '../pokemon.js';
import { getPokedex, findById } from '../utils.js';

const dex = getPokedex();
const main = document.getElementById('main');


for (let item of dex){
    const pokes = findById(pokemon, item.id);

    const div = document.createElement('div');
    const img = document.createElement('img');
    img.src = `../${pokes.image}`;
    const header = document.createElement('h2');
    header.textContent = pokes.name;
    const resultSpan1 = document.createElement('span');
    resultSpan1.textContent = `Encountered: ${pokemon.encountered}`;
    const resultsSpan2 = document.createElement('span');
    resultsSpan2.textContent = `Caught: ${pokemon.picked}`;

    div.append(header, img, resultSpan1, resultsSpan2);
    main.append(div);

}

var ctx = document.getElementById('resultsChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
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

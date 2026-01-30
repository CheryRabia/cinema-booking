import { getmovies } from "./api.js";
const movieSelect = document.getElementById('movie-select');
const container = document.querySelector('.container');
const countLabel = document.getElementById('count');
const pricelLabel = document.getElementById('total');
let ticketPrice = 0;

function updateSummary() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;

    countLabel.innerText = selectedSeatsCount;
    pricelLabel.innerText = selectedSeats.length * ticketPrice;
}
async function init() {
    const movies = await getmovies();
    movieSelect.innerHTML = movies.map(m=>
        `<option value="${m.price}">${m.name} (${m.price} kr)</option>`).join('');

    ticketPrice = Number (movieSelect.value);
    updateSummary();
}
container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
        updateSummary();
    }
});

movieSelect.addEventListener('change', (e) => {
    ticketPrice = Number(e.target.value);
    updateSummary();
});
init();
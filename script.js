let button = document.getElementById('buts');
let score1 = document.getElementById('score1');
let score2 = document.getElementById('score2');

button.addEventListener('click', 
    () => {
    button.classList.add('buts');

    let random1 = Math.floor(Math.random() * 5);
    let random2 = Math.floor(Math.random() * 5);
    
    score1.textContent = random1;
    score2.textContent = random2;
});
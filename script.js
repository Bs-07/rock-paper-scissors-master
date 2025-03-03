'use strict';

const choice_btn = document.querySelectorAll('.btn'); // Use class, not ID
const container = document.querySelector('.triangle-container');
const result_container = document.querySelector('.player-container');
const reset = document.querySelector('#reset');
const result = document.querySelector('#result');

const show_score = document.querySelector('#score');
const header = document.querySelector('.header');
const player_btn = document.querySelector('.player_1 .btn-picked'); // Player's button
const house_btn = document.querySelector('.player_2 .btn-picked'); // House's button
const player_img = document.querySelector('.player_1 .img'); // Player's image
const house_img = document.querySelector('.player_2 .img'); // House's image

const rules = document.querySelector('.btn-rules');

let player;
let house_player;
const choices = ['rock', 'paper', 'scissors'];
let score = 0;

choice_btn.forEach((btn) => {
  btn.addEventListener('click', function () {
    player = btn.getAttribute('data-choice'); // Use data attribute instead of value
    console.log('Player choice:', player);

    container.classList.add('hidden');
    result_container.style.display = 'flex';
    result_container.style.opacity = '1';
    result_container.style.transition = 'all 0.6s ease-in'; // Fixed transition duration
    // header.style.marginBottom = '0';

    let random_choice = Math.floor(Math.random() * 3);
    house_player = choices[random_choice];
    console.log('House choice:', house_player);

    determineWinner(player, house_player);
    updateButtons(player, house_player);
  });
});

function updateButtons(player, house_player) {
  // Remove any previous styles
  player_btn.style = '';
  house_btn.style = '';

  // Update images
  player_img.src = `images/icon-${player}.svg`;
  house_img.src = `images/icon-${house_player}.svg`;

  // Apply styles dynamically
  applyButtonStyle(player_btn, player);
  applyButtonStyle(house_btn, house_player);
}

function applyButtonStyle(button, choice) {
  if (choice === 'paper') {
    button.style.background =
      'linear-gradient(hsl(230, 89%, 62%) , hsl(230, 89%, 65%))';
    button.style.boxShadow = '2px 8px 0px hsl(230, 80%, 49%)';
  } else if (choice === 'scissors') {
    button.style.background =
      'linear-gradient(hsl(39, 89%, 49%) , hsl(40, 84%, 53%))';
    button.style.boxShadow = '2px 8px 0px hsl(39, 92%, 38%)';
  } else if (choice === 'rock') {
    button.style.background =
      'linear-gradient(hsl(349, 71%, 52%) , hsl(349, 70%, 56%))';
    button.style.boxShadow = '2px 8px 0px hsl(349, 91%, 35%)';
  }
}

function determineWinner(player, house_player) {
  player_btn.classList.remove('winner');
  house_btn.classList.remove('winner');

  if (player === house_player) {
    console.log("It's a draw");
    result.textContent = "It's a Draw";
  } else if (
    (player === 'rock' && house_player === 'scissors') ||
    (player === 'scissors' && house_player === 'paper') ||
    (player === 'paper' && house_player === 'rock')
  ) {
    console.log('Player wins');
    result.textContent = 'you won';
    score++;
    player_btn.classList.add('winner');
  } else {
    result.textContent = 'you lose';
    console.log('House wins');
    house_btn.classList.add('winner');
  }

  show_score.textContent = score; // Update UI after score changes
}

reset.addEventListener('click', () => {
  container.classList.remove('hidden');
  result_container.style.display = 'none';
  result_container.style.opacity = '0';
  result_container.style.transition = 'all 0.6s ease-in';
});

btn - rules.addEventListener('click', (e) => {});

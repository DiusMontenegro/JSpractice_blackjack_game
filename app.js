const body = document.querySelector(".container")


body.innerHTML = `
  <h1>Blackjack</h1>
  <p id="message-el">Do you want to play a round?</p>
  <p class="input cards" id="cards-el">Cards: </p>
  <p class="input sum" id="sum-el">Sum: </p>
  <button class="start btn" onclick="startGame()">START</button>
  <button class="new-card btn" onclick="newCard()">NEW CARD</button>
  <p id="player-el"></p>
`
const messageEl = document.getElementById("message-el");
const sumEl = document.getElementById("sum-el");
const cardsEl = document.getElementById("cards-el");
const playerEl = document.getElementById("player-el")
let player = {
  name: "Dre",
  credits: 200,
}
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

playerEl.textContent = player.name + ": " + player.credits

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13 + 1);
  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber > 10 && randomNumber < 14) {
    return 10;
  } else {
    return randomNumber;
  }
}

function startGame() {
  renderGame();
}

function renderGame() {
  
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards.push(firstCard, secondCard);
  sum = firstCard + secondCard
  isAlive = true

  cardsEl.textContent = `Cards: `;

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = `Sum: ${sum}`;

  if (sum <= 20 && sum > 2) {
    message = "Do you want to draw a new card?";
    isAlive = true;
  } else if (sum === 21) {
    message = "Woohoo! You've got a Black Jack";
    hasBlackJack = true;
    isAlive = true;
  } else {
    message = "You're out of the game :(";
    isAlive = false;
  }

  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}

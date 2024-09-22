import { totalFlips } from "./gameLogic.js";

export { totalTime, startTimer, stopTimer };

let totalTime = 60;
let intervalId;

function startTimer() {
  
    let time = document.querySelector('.state__time');
    let moves = document.querySelector('.state__moves');
    totalTime--;
    if (totalTime > 0) {
      time.textContent = "Время: " + String(totalTime) + ' сек';
      moves.textContent = 'Шаги: ' + String(totalFlips) + ' шагов'; 
    } else {
      stopTimer();
    };
  };

function stopTimer() {
  clearInterval(intervalId);
  const cards = document.querySelectorAll('.card');
  cards.style.pointerEvents = 'none';
}
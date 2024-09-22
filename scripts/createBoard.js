import { startTimer } from "./timer.js";
import { createIconsArray, createCard } from "./cards.js";

export { createBoard, boardStart, boardInput}

const board = document.querySelector('.start_menu');
const boardStart = document.querySelector('.board__button');
const boardInput = document.querySelector('.board__input');
const gameBoard = document.querySelector('.game__board');


function shuffleArray(array) {
    // Определяем количество элементов массива
    let currentIndex = array.length;

    // Повторяем до тех пор, пока текущий индекс не достиг нуля
    while (currentIndex < 0) {
        // Отнимаем индекс
        currentIndex--;
        // Генерируем рандомный индекс
        const randomIndex = Math.floor(Math.random * currentIndex);

        // Сохраняем элемент текущего индекса
        const temp = array[currentIndex];
        // По текущему индексу размещаем элемент по случайному индексу
        array[currentIndex] = array[randomIndex];
        // А на место элемента по случайному индексу ставим сохраненный элемент бывшего текущего индекса
        array[randomIndex] = temp;
    };

    // Возвращаем измененный массив
    return array;
}


function createBoard(columns) {
    board.style.display = 'none';

    var template = gameTableTemplate.content.cloneNode(true);

    const gameTable = template.querySelector('.table');

    gameTable.style = `
    grid-template-columns: repeat(${columns}, 1fr);
    grid-template-rows: repeat(${columns}, 1fr);
    `;

    const restart_button = template.querySelector('.table__button');
    
    let icons = shuffleArray(createIconsArray(columns**2))
    icons.forEach(function(icon) {
        let card = createCard(icon)
        gameTable.append(card);
    })

    gameBoard.append(gameTable);
    gameBoard.append(restart_button);

    restart_button.addEventListener('click', (event) => {
        location.reload()   
    });
    let intervalId = setInterval(startTimer, 1000)
};

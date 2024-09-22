import { createBoard } from './scripts/createBoard.js'

const boardStart = document.querySelector('.board__button');
const boardInput = document.querySelector('.board__input');

boardStart.addEventListener('click', (event) => {
    const size = boardInput.value;
    if (size >= 2 && size <= 6 && size % 2 === 0) {
        createBoard(size);
    } else {
        boardInput.value = 4;
    };
});

import { gameLogic } from './gameLogic.js'


export {createIconsArray, createCard, dublicateElements}

function createIconsArray(initialCount) {
    const cardsIcons = ["compass", "cloud", "play", "bolt", "stop", "cogs", "atom", "basketball-ball", "arrows", "angle-left", "bars", "file", "filter", "gear", "folder", "folder-open", "shield", "scissors", "pen-clip"];
    const icons = cardsIcons.slice(0, Math.floor(initialCount / 2));
    const doubleCards = dublicateElements(icons);
    return doubleCards;
};


function dublicateElements(array) {
    let array2 = [];
    array.forEach((item) => {
        array2.push(item, item);
    });
    return array2;
};
 
function createCard(flippedIcon) {
    const template = cardTemplate.content.cloneNode(true);
    const card = template.querySelector('.card');
    
    let flipped_icon = template.querySelector('#flippedIcon');
    flipped_icon.classList.add(`fa-${flippedIcon}`);

    card.addEventListener('click', (event) => {
      gameLogic(card);
    });
    return card;
};


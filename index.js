import * as game from './src/red-hat.js';
import startMenu from './src/menu.js';
import getDataFromFile from './src/fs.js';
import goLongWay from './src/long-way.js';
// import goShortWay from './src/short-way.js';

const startGame = () => {
  const currentHero = {};

  console.log('Добро пожаловать в игру "Сказочный замес"!');

  switch (startMenu()) {
    case -1:
      return console.log('Вы вышли из игры!');

    case 0:
      console.clear();
      console.log('Вы начали новую игру');

      Object.assign(currentHero, game.greeting());
      Object.assign(currentHero, game.choosePath());
      if (currentHero.way === 'Длинная дорога') goLongWay(currentHero);
      // if (currentHero.way === 'Короткая дорога') goShortWay(currentHero);
      break;

    case 1:
      console.log(getDataFromFile('./content/top-list.json'));
      return null;

    default:
      return 'Operator selection error!!!';
  }

  return null;
};

export default startGame;

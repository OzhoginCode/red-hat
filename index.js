import * as game from './src/red-hat.js';
import startMenu from './src/menu.js';
import getDataFromFile from './src/fs.js';
import longWay from './src/longWay.js';
// import shotWay from './src/shotWay';

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
      console.log(currentHero.way);
      if (currentHero.way === 'Длинная дорога') { longWay(currentHero); }
      // if (currentHero.way === 'Короткая дорога') { shotWay(currentHero); }
      console.log(currentHero);
      break;
      // return null;
    case 1:
      console.log(getDataFromFile('./content/top-list.json'));
      return null;
    default:
      return 'Operator selection error!!!';
  }
};
export default startGame;

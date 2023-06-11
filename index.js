import * as game from './src/red-hat.js';
import startMenu from './src/menu.js';
import getDataFromFile from './src/fs.js';

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
      console.log(currentHero);
      return null;
    case 1:
      console.log(getDataFromFile('./content/riddles.json'));
      return null;
    default:
      return 'Operator selection error!!!';
  }
};
export default startGame;

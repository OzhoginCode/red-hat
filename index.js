import * as game from './src/red-hat.js';
import startMenu from './src/menu.js';

const startGame = () => {
  const currentHero = {};

  console.log('Добро пожаловать в игру "Сказочный замес"!');

  switch (startMenu()) {
    case -1:
      return console.log('Вы вышли из игры!');
    case 0:
      console.log('Вы начали новую игру');
      Object.assign(currentHero, game.greeting());
      return null;
    case 1:
      return null;
    default:
      return 'Operator selection error!!!';
  }
};
export default startGame;

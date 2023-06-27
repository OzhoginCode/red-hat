// eslint-disable-next-line import/no-extraneous-dependencies
import chalk from 'chalk';
import * as game from './red-hat.js';
import startMenu from './menu.js';
import goLongWay from './long-way.js';
import goShortWay from './short-way.js';
import finishGame from './final.js';
import showRecords from './show-records.js';

const startGame = () => {
  const currentHero = {};

  console.clear();
  console.log(chalk.blue.bgRed.bold('Добро пожаловать в игру "Сказочный замес"!'));

  switch (startMenu()) {
    case -1:
      console.clear();
      return console.log('Вы вышли из игры!');

    case 0:
      console.clear();
      console.log('Вы начали новую игру');

      Object.assign(currentHero, game.greeting());
      if (currentHero.exit) {
        return startGame();
      }

      Object.assign(currentHero, game.choosePath());
      if (currentHero.exit) {
        return startGame();
      }

      switch (currentHero.way) {
        case 'Длинная дорога':
          Object.assign(currentHero, goLongWay(currentHero));
          break;
        case 'Короткая дорога':
          Object.assign(currentHero, goShortWay(currentHero));
          break;
      }

      if (currentHero.exit) return startGame();

      finishGame(currentHero);
      break;

    case 1:
      showRecords();
      return startGame();
  }

  return startGame();
};

export default startGame;

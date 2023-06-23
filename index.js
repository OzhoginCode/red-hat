// eslint-disable-next-line import/no-extraneous-dependencies
import chalk from 'chalk';
import * as game from './src/red-hat.js';
import startMenu from './src/menu.js';
import { getDataFromFile } from './src/fs.js';
import goLongWay from './src/long-way.js';
import goShortWay from './src/short-way.js';
import finishGame from './src/final.js';

const startGame = () => {
  const currentHero = {};
  const table = getDataFromFile('./content/top-list.json');

  console.log(chalk.blue.bgRed.bold('Добро пожаловать в игру "Сказочный замес"!'));

  switch (startMenu()) {
    case -1:
      console.clear();
      return console.log('Вы вышли из игры!');

    case 0:
      console.clear();
      console.log('Вы начали новую игру');

      currentHero.startTime = new Date();
      console.log(currentHero.startTime);

      Object.assign(currentHero, game.greeting());
      if (currentHero.exit) {
        return startGame();
      }

      Object.assign(currentHero, game.choosePath());
      if (currentHero.exit) {
        return startGame();
      }

      if (currentHero.way === 'Длинная дорога') {
        Object.assign(currentHero, goLongWay(currentHero));
        if (currentHero.exit) {
          return startGame();
        }
      }
      if (currentHero.way === 'Короткая дорога') {
        Object.assign(currentHero, goShortWay(currentHero));
        if (currentHero.exit) {
          return startGame();
        }
      }

      finishGame(currentHero);
      break;

    case 1:
      Object.entries(table).map(([name, result]) => console.log(`${name}................${result}`));
      return startGame();

    default:
      return 'Operator selection error!!!';
  }

  return startGame();
};

export default startGame;

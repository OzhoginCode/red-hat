// eslint-disable-next-line import/no-extraneous-dependencies
import chalk from 'chalk';
import * as game from './red-hat.js';
import startMenu from './menu.js';
import { getDataFromFile } from './fs.js';
import goLongWay from './long-way.js';
import goShortWay from './short-way.js';
import finishGame from './final.js';

const startGame = () => {
  const currentHero = {};
  const table = getDataFromFile('./userdata/top-list.json');

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
      console.clear();
      if (!table.length) console.log('Список рекордов пока пуст\n');
      Object.entries(table).map(([name, result]) => console.log(`${name}\t\t\t${result}`));
      return startGame();
  }

  return startGame();
};

export default startGame;

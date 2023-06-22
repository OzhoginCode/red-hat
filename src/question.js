import readlineSync from 'readline-sync';
// eslint-disable-next-line import/no-extraneous-dependencies
import chalk from 'chalk';
import { getDataFromFile } from './fs.js';
// import * as game from './red-hat.js';
// import { ombudsman } from './avatars.js';

export default (currentHero) => {
  const allTasks = getDataFromFile('./content/riddles.json');
  const { way } = currentHero;
  const wayTasks = (way === 'Длинная дорога')
    ? allTasks.filter((el) => el.complexity <= 4)
    : allTasks.filter((el) => el.complexity >= 4);
  const task = wayTasks[Math.floor(Math.random() * wayTasks.length)];
  console.clear();
  console.log(chalk.bgGreen(task.riddle));

  const answer = readlineSync.keyInSelect(
    task.answers,
    'Выберите правильный ответ:',
    { cancel: 'Выйти из игры' },
  ) + 1;

  const { score } = currentHero;
  const { complexity } = task;

  let hero = { ...currentHero, score: score + complexity, win: true };
  if (task.correctAnswer === answer) {
    console.clear();
    console.log('ПРАВИЛЬНЫЙ ОТВЕТ!');
    return hero;
  }

  console.clear();
  console.log('Неверно:(');
  const lostPies = complexity >= 5 ? 2 : 1;
  const { count } = currentHero;
  hero = { ...currentHero, count: count - lostPies, win: false };
  return hero;
};

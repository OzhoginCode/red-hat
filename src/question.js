import readlineSync from 'readline-sync';
import getDataFromFile from './fs.js';
import * as game from './red-hat.js';

export default (currentHero, taskNum) => {
  const avatars = { speaker: 'hiya', mother: 'yasuna_02', ombudsman: 'C3PO' };
  const tasks = getDataFromFile('./content/riddles.json');
  game.sayPhrase(tasks[taskNum - 1].riddle, avatars.ombudsman);
  const answer = readlineSync.keyInSelect(
    tasks[taskNum - 1].answers,
    'Выберите правильный ответ:',
    { cancel: 'Выйти из игры' },
  ) + 1;
  const { score } = currentHero;
  const { complexity } = tasks[taskNum - 1];
  let hero = { ...currentHero, score: score + complexity, win: true };
  if (tasks[taskNum - 1].correctAnswer === answer) {
    console.log('ПРАВИЛЬНЫЙ ОТВЕТ!');
    return hero;
  }
  console.log('Не верный ответ.');
  const lostPies = complexity >= 5 ? 2 : 1;
  const { count } = currentHero;
  hero = { ...currentHero, count: count - lostPies, win: false };
  return hero;
};

import readlineSync from 'readline-sync';
import getDataFromFile from './fs.js';
import * as game from './red-hat.js';

const avatars = { speaker: 'hiya', mother: 'yasuna_02', ombudsman: 'C3PO' };
export default (currentHero, taskNum) => {
  const tasks = getDataFromFile('./content/riddles.json');
  game.sayPhrase(tasks[taskNum - 1].riddle, avatars.ombudsman);
  const answer = readlineSync.keyInSelect(
    tasks[taskNum - 1].answers,
    'Выберите правильный ответ:',
    { cancel: 'Выйти из игры' },
  );
  const { score } = currentHero;
  const { complexity } = tasks[taskNum - 1];
  if (tasks[taskNum - 1].correctAnswer === answer) {
    return { ...currentHero, win: true, score: score + complexity };
  }
  const lostPies = complexity >= 5 ? 2 : 1;
  const { count } = currentHero;
  return { ...currentHero, win: false, count: count - lostPies };
};

const tasks = getDataFromFile('./content/riddles.json');
console.log(tasks[0].riddle);

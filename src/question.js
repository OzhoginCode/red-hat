import readlineSync from 'readline-sync';
import chalk from 'chalk';

export default (currentHero, task) => {
  console.clear();
  console.log(chalk.bgGreen(task.riddle));

  const answer = readlineSync.keyInSelect(
    task.answers,
    'Выберите правильный ответ:',
    { cancel: 'Правильного ответа нет' },
  ) + 1;

  let { score } = currentHero;
  const { complexity } = task;
  score += complexity;

  let hero = { ...currentHero, score, win: true };
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

import readlineSync from 'readline-sync';
import cowsay from 'cowsay';

const startMenu = (menuItems) => {
  const index = readlineSync.keyInSelect(
    menuItems,
    'Выберите пункт меню:',
    { cancel: 'Выйти из игры' },
  );
  return index;
};

const getNameHero = () => readlineSync.question('Как тебя зовут герой?');

const sayPhrase = (phrase, face) => {
  console.log(cowsay.say({ text: phrase, f: face }));
  readlineSync.keyInPause('Продолжить повествование...', { guide: false });
  console.clear();
  return undefined;
};
const askQuestion = (question, face) => {
  console.log(cowsay.say({ text: question, f: face }));
  const answer = readlineSync.keyInYNStrict('Что ответила Красная Шапочка');
  console.clear();
  return answer;
};
export {
  startMenu, getNameHero, sayPhrase, askQuestion,
};

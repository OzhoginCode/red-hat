import readlineSync from 'readline-sync';
import cowsay from 'cowsay';
import { speaker, mother, ombudsman } from './avatars.js';

const getHeroName = () => readlineSync.question('Как тебя зовут герой? ');

const sayPhrase = (phrase, face) => {
  console.clear();
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

function greeting() {
  const hero = {};
  hero.name = getHeroName();

  sayPhrase('Итак, мы начинаем...', speaker);
  sayPhrase(`Жила-была девочка, которую все звали Красной Шапочкой.
Жила она с мамой, а на другой стороне леса жила ее бабушка.`, speaker);
  sayPhrase(`Однажды бабушка заболела и позвонила своей внучке по WhatsApp
и попросила принести ей пирожки, чтобы побыстрее поправиться.`, speaker);
  sayPhrase('Замесила мама тесто, напекла пирожков...', speaker);

  if (!askQuestion('Красная шапочка, отнеси, пожалуйста, пирожки для бабушки', mother)) {
    sayPhrase('Красная Шапочка решила остаться дома и смотреть ролики в Tik-Tok.', speaker);
    hero.exit = true;
    return hero;
  }

  sayPhrase(`У Красной Шапочки теперь 7 пирожков.
Нужно донести до бабушки как можно больше пирожков, 
чтобы не проиграть в нашей игре!`, speaker);
  hero.count = 7;
  return hero;
}

function choosePath() {
  sayPhrase(`Красная Шапочка пошла к лесу и встретила по дороге детского омбудсмена,
который был очень недоволен, что маленькая девочка идет в лес одна и без взрослых`, ombudsman);
  sayPhrase(`Он спросил у нее, куда она идет, и Красная Шапочка ответила,
что идет к своей бабушке, чтобы принести ей корзинку с пирожками.`, ombudsman);
  sayPhrase('Тогда он сказал, что в лесу очень опасно и впереди две дороги:', ombudsman);
  sayPhrase(`короткая -  до бабушки идти немного меньше, но на пути могут быть какие-то препятствия и сложные задания;
длинная - путь длиннее, и тоже просят помочь с решением задач, но они вроде бы проще.`, ombudsman);

  const wayTypes = ['Длинная', 'Короткая'];
  const answer = readlineSync.keyInSelect(
    wayTypes,
    'Красная Шапочка задумалась, по какой дороге ей пойти дальше?:',
    { cancel: 'Повторить предыдущее сообщение' },
  );
  if (answer === 0) return { way: 'Длинная дорога' };
  if (answer === 1) return { way: 'Короткая дорога' };
  return choosePath();
}

export {
  sayPhrase, askQuestion, greeting, choosePath,
};

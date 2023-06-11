import readlineSync from 'readline-sync';
import cowsay from 'cowsay';

// Здесь задается стили отоброжения аваторов cowsay
const avatars = { speaker: 'hiya', mother: 'yasuna_02', ombudsman: 'C3PO' };

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
function greeting() {
  const hero = {};
  hero.name = getNameHero();

  sayPhrase('Итак, мы начинаем...', avatars.speaker);
  sayPhrase(`Жила-была девочка, которую все звали Красной Шапочкой.
Жила она с мамой, а на другой стороне леса жила ее бабушка.`, avatars.speaker);
  sayPhrase(`Однажды бабушка заболела и позвонила своей внучке по WhatsApp
и попросила принести ей пирожки, чтобы побыстрее поправиться.`, avatars.speaker);
  sayPhrase('Замесила мама тесто, напекла пирожков...', avatars.speaker);

  if (!askQuestion('Красная шапочка, отнеси, пожалуйста пирожки для бабушки', avatars.mother)) {
    sayPhrase('Красная Шапочка решила остаться дома и смотреть ролики в Tik-Tok.', avatars.speaker);
    console.log('Game over!');
    process.exit();
  }
  sayPhrase(`У Красной Шапочки теперь 7 пирожков.
Нужно донести до бабушки как можно больше пирожков, 
чтобы не проиграть в нашей игре!`, avatars.speaker);
  hero.count = 7;
  return hero;
}
function choosePath() {
  sayPhrase(`Красная Шапочка пошла к лесу и встретила по дороге детского омбудсмена,
который был очень недоволен, что маленькая девочка идет в лес одна и без взрослых`, avatars.ombudsman);
  sayPhrase(`Он спросил у нее, куда она идет, и Красная Шапочка ответила,
что идет к своей бабушке, чтобы принести ей корзинку с пирожками.`, avatars.ombudsman);
  sayPhrase('Тогда он сказал, что в лесу очень опасно и впереди две дороги:', avatars.ombudsman);
  sayPhrase(`короткая - идти немного меньше до бабушки, но на пути могут быть какие-то препятствия и сложные задания;
длинная - путь длиннее, и тоже просят помочь с решением задач, но они вроде бы проще.`, avatars.ombudsman);
  const typesWay = ['Длинная', 'Короткая'];
  const answer = readlineSync.keyInSelect(
    typesWay,
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

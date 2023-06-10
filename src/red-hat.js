import readlineSync from 'readline-sync';
import cowsay from 'cowsay';

// Здесь задается стили отоброжения аваторов cowsay
const avatars = { speaker: 'hiya', mother: 'yasuna_02' };

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
    return null;
  }
  sayPhrase(`У Красной Шапочки теперь 7 пирожков.
Нужно донести до бабушки как можно больше пирожков, 
чтобы не проиграть в нашей игре!`, avatars.speaker);
  hero.count = 7;
  return hero;
}
export {
  greeting, sayPhrase, askQuestion,
};

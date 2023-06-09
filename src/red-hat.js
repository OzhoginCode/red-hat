import {
  startMenu, getNameHero, sayPhrase, askQuestion,
} from './menu.js';

const game = () => {
  const menuItems = ['Новая игра', 'Таблица рекордов'];
  const currentHero = {};
  let speaker = 'hiya';

  console.log('Добро пожаловать в игру "Сказочный замес"!');

  switch (startMenu(menuItems)) {
    case -1:
      return console.log('Вы вышли из игры!');
    case 0:
      console.log(menuItems[0]);
      currentHero.name = getNameHero();

      sayPhrase('Итак, мы начинаем...', speaker);
      sayPhrase('Жила-была девочка, которую все звали Красной Шапочкой.', speaker);
      sayPhrase('Жила она с мамой, а на другой стороне леса жила ее бабушка.', speaker);
      sayPhrase('Однажды бабушка заболела и позвонила своей внучке по WhatsApp...', speaker);
      sayPhrase('И попросила принести ей пирожки, чтобы побыстрее поправиться.', speaker);
      sayPhrase('Замесила мама тесто, напекла пирожков...', speaker);
      if (!askQuestion('Красная шапочка, отнеси, пожалуйста пирожки для бабушки', 'yasuna_02')) {
        sayPhrase('Красная Шапочка решила остаться дома и смотреть ролики в Tik-Tok.', speaker);
        console.log('Game over!');
        return null;
      }
      return null;
    case 1:
      return null;
    default:
      return 'Operator selection error!!!';
  }
};
export default game;

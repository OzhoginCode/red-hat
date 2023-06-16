import question from './question.js';
import * as game from './red-hat.js';

const speaker = 'hiya';
const meetLamb = 'Красная Шапочка подумала и решила, что лучше пойти\n'
+ 'по короткой дороге, ведь ее не пугают трудности. Она\n'
+ 'попрощалась и продолжила свой путь к бабушке.\n'
+ 'Пройдя совсем немного ей повстречалась\n'
+ 'заблудившаяся овечка. Овечка попросила помощи,\n'
+ 'чтобы найти свою стаю, которая где-то заблудилась в\n'
+ 'лесу. Красная Шапочка решила помочь овечке и вместе\n'
+ 'они отправились на поиски стаи\n';
const meetBeer = 'Красная шапочка была рада продолжить свой путь, поэтому\n'
+ 'включила любимый трек в наушниках и двинулась дальше, пока не\n'
+ 'услышали странный звук из-за кустов. Красная Шапочка решила\n'
+ 'проверить, что там происходит, и увидела, что там находится\n'
+ 'большой медведь, который застрял в ловушке.';
const leaveBeer = 'Медведь был очень благодарен и предложил Красной Шапочке\n'
+ 'проводить ее дальше по лесу. Они прошли мимо реки, где они увидели\n'
+ 'маленькую лодочку. Медведь предложил Красной Шапочке сесть в\n'
+ 'лодку и поплыть по реке, чтобы быстрее добраться до дома бабушки,\n'
+ 'что она с радостью и сделала\n';

export default (currentHero) => {
  game.sayPhrase(meetLamb, speaker);
  let hero = question(currentHero, 4);
  if (!hero.win) {
    if (!game.askQuestion('Отдать пирожки, чтобы пройти дальше?', speaker)) {
      game.sayPhrase('Братец Лис стал кричать на Красную Шапочку, она испугалась и побежала домой.', speaker);
      game.sayPhrase('GAME OVER!', speaker);
      hero.exit = true;
      return hero;
    }
    game.sayPhrase(`'Пирожков в корзинке - ${hero.count} штук'`, speaker); // отняли пирожки уже в question
  }
  game.sayPhrase(meetBeer, speaker);
  hero = question(hero, 5);
  if (!hero.win) {
    if (!game.askQuestion('Отдать пирожки,чтобы пройти дальше?', speaker)) {
      game.sayPhrase('Красная Шапочка так и не смогла понять где находится дом девочки, а в итоге заблудилась и сама.', speaker);
      game.sayPhrase('GAME OVER!', speaker);
      hero.exit = true;
      return hero;
    }
    game.sayPhrase(`'Пирожков в корзинке - ${hero.count} штук'`, speaker);
  }

  game.sayPhrase(leaveBeer, speaker);
  return hero;
};

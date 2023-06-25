import { getDataFromFile } from './fs.js';
import question from './question.js';
import * as game from './red-hat.js';
import { speaker } from './avatars.js';

const meetSheepSpeech = 'Красная Шапочка подумала и решила, что лучше пойти\n'
+ 'по короткой дороге, ведь ее не пугают трудности. Она\n'
+ 'попрощалась и продолжила свой путь к бабушке.\n'
+ 'Пройдя совсем немного ей повстречалась\n'
+ 'заблудившаяся овечка. Овечка попросила помощи,\n'
+ 'чтобы найти свою стадо, которая где-то заблудилась в\n'
+ 'лесу. Красная Шапочка решила помочь овечке и вместе\n'
+ 'они отправились на поиски стада';

const meetBearSpeech = 'Красная шапочка была рада продолжить свой путь, поэтому\n'
+ 'включила любимый трек в наушниках и двинулась дальше, пока не\n'
+ 'услышала странный звук из-за кустов. Красная Шапочка решила\n'
+ 'проверить, что там происходит, и увидела, что там находится\n'
+ 'большой медведь, который застрял в ловушке.';

const leaveBearSpeech = 'Медведь был очень благодарен и предложил Красной Шапочке\n'
+ 'проводить ее дальше по лесу. Они прошли мимо реки, где они увидели\n'
+ 'маленькую лодочку. Медведь предложил Красной Шапочке сесть в\n'
+ 'лодку и поплыть по реке, чтобы быстрее добраться до дома бабушки,\n'
+ 'что она с радостью и сделала';

export default (currentHero) => {
  const allTasks = getDataFromFile('./content/riddles.json');
  const wayTasks = allTasks.filter((el) => el.complexity > 2 && el.complexity < 10);
  game.sayPhrase(meetSheepSpeech, speaker);
  let hero = question(currentHero, wayTasks[1]);
  if (!hero.win) {
    if (!game.askQuestion('Отдать один пирожок, чтобы пройти дальше?', speaker)) {
      game.sayPhrase('Братец Лис стал кричать на Красную Шапочку, она испугалась и побежала домой.', speaker);
      game.sayPhrase('GAME OVER!', speaker);
      hero.exit = true;
      return hero;
    }
    game.sayPhrase(`'Пирожков в корзинке - ${hero.count} штук'`, speaker);
  }

  game.sayPhrase(meetBearSpeech, speaker);
  hero = question(hero, wayTasks[2]);
  if (!hero.win) {
    if (!game.askQuestion('Отдать один пирожок, чтобы пройти дальше?', speaker)) {
      game.sayPhrase('Красная Шапочка так и не смогла понять где находится дом девочки, а в итоге заблудилась и сама.', speaker);
      game.sayPhrase('GAME OVER!', speaker);
      hero.exit = true;
      return hero;
    }
    game.sayPhrase(`'Пирожков в корзинке - ${hero.count} штук'`, speaker);
  }

  game.sayPhrase(leaveBearSpeech, speaker);
  return hero;
};

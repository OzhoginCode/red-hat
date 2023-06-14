import startGame from '../index.js';
import question from './question.js';
import * as game from './red-hat.js';

const speaker = 'hiya';

const foxSpeech = 'Красная Шапочка подумала и решила, что лучше пойти по'
+ 'длинному пути, ведь лучше идти дольше, но не'
+ 'волноваться из-за сложных заданий. Она попрощалась и'
+ 'продолжила свой путь к бабушке.'
+ 'Но Красная Шапочка не прошла и 100 метров как перед'
+ 'ней на дорогу вышел Братец Лис в тренировочных штанах'
+ '"аБиБас" и сказал что не пропустит ее дальше, если он'
+ 'не решит задачу';

const smallGirlSpeech = 'Красная Шапочка продолжала свой путь через лес и вдруг'
+ 'увидела перед собой маленькую девочку, которая стояла на'
+ 'краю реки. Девочка была одета в белое платье и держала в'
+ 'руках красный шарик. "Точь в точь как в фильме "ОНО",'
+ 'подумала Красная Шапочка, но все же подошла к ней и'
+ 'спросила, что она делает в лесу одна. Девочка ответила, что'
+ 'она живет в домике у реки и собирала ягоды для своих'
+ 'родителей. Красная Шапочка решила помочь девочке и'
+ 'предложила отвести ее домой.';

const helpSmallGirl = 'С помощью GPS они наконец добрались до дома девочки.'
+ 'Ее родители были очень благодарны Красной Шапочке за то,'
+ 'что она спасла их дочь. Но пора было двигаться дальше, к'
+ 'бабушке...';

export default (currentHero) => {
  game.sayPhrase(foxSpeech, speaker);
  question(currentHero, 1);
  if (!currentHero.win) {
    if (!game.askQuestion('Отдать один пирожок,чтобы пройти дальше?', speaker)) {
      game.sayPhrase('Братец Лис стал кричать на Красную Шапочку, она испугалась и побежала домой.', speaker);
      console.clear();
      game.sayPhrase('GAME OVER!', speaker);
      return startGame();
    }
    game.sayPhrase(`'Пирожков в корзинке - ${currentHero.count} штук'`, speaker); // отняли пирожки уже в question
  }

  game.sayPhrase(smallGirlSpeech, speaker);
  question(currentHero, 2);
  if (!currentHero.win) {
    if (!game.askQuestion('Отдать один пирожок,чтобы пройти дальше?', speaker)) {
      game.sayPhrase('Красная Шапочка так и не смогла понять где находится дом девочки, а в итоге заблудилась и сама.', speaker);
      console.clear();
      game.sayPhrase('GAME OVER!', speaker);
      return startGame();
    }
    game.sayPhrase(`'Пирожков в корзинке - ${currentHero.count} штук'`, speaker);
  }

  game.sayPhrase(helpSmallGirl, speaker);
  question(currentHero, 3);
  if (!currentHero.win) {
    if (!game.askQuestion('Отдать один пирожок,чтобы пройти дальше?', speaker)) {
      game.sayPhrase('Красная Шапочка так и не смогла понять где находится дом девочки, а в итоге заблудилась и сама.', speaker);
      console.clear();
      game.sayPhrase('GAME OVER!', speaker);
      return startGame();
    }
    game.sayPhrase(`'Пирожков в корзинке - ${currentHero.count} штук'`, speaker);
  }
  return currentHero;
};

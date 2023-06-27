import { getDataFromFile } from './fs.js';
import question from './question.js';
import * as game from './red-hat.js';
import { speaker } from './avatars.js';

const foxSpeech = 'Красная Шапочка подумала и решила, что лучше пойти по\n'
+ 'длинному пути, ведь лучше идти дольше, но не\n'
+ 'волноваться из-за сложных заданий. Она попрощалась и\n'
+ 'продолжила свой путь к бабушке.\n'
+ 'Не прошла она и 100 метров, как перед ней на дорогу\n'
+ 'вышел Братец Лис в тренировочных штанах "аБиБас" и \n'
+ 'сказал, что не пропустит ее дальше, если она не\n'
+ 'решит задачу';

const smallGirlSpeech = 'Красная Шапочка продолжала свой путь через лес и вдруг\n'
+ 'увидела перед собой маленькую девочку, которая стояла на\n'
+ 'краю реки. Девочка была одета в белое платье и держала в\n'
+ 'руках красный шарик. "Точь в точь как в фильме "ОНО",\n'
+ 'подумала Красная Шапочка, но все же подошла к ней и\n'
+ 'спросила, что она делает в лесу одна. Девочка ответила, что\n'
+ 'она живет в домике у реки и собирала ягоды для своих\n'
+ 'родителей. Красная Шапочка решила помочь девочке и\n'
+ 'предложила отвести ее домой.';

const meetEnthSpeech = 'С помощью GPS они наконец добрались до дома девочки.\n'
+ 'Ее родители были очень благодарны Красной Шапочке за то,\n'
+ 'что она спасла их дочь. Но пора было двигаться дальше, к\n'
+ 'бабушке... По расчётам Красной Шапочки, ей оставалось\n'
+ 'совсем немного, чтобы дойти до дома бабушки, когда дорогу\n'
+ 'ей преградило огромное дерево с руками-ветками.\n'
+ '"Я знаю, кто ты! - воскликнула девочка - Ты Энт, я видела\n'
+ 'таких как ты в фильме Властелин Колец"\n'
+ '"Ты права, я Энт - страж леса! И ты не пройдешь дальше,\n'
+ ' пока не отгадаешь мою загадку!"';

export default (currentHero) => {
  const allTasks = getDataFromFile('./content/riddles.json');
  const wayTasks = allTasks.filter((el) => el.complexity <= 2)
    .sort(() => Math.random() - 0.5);
  game.sayPhrase(foxSpeech, speaker);

  let hero = question(currentHero, wayTasks[1]);

  if (!hero.win) {
    if (!game.askQuestion('Братец Лис попросил один пирожок, чтобы\n'
    + 'пропустить девочку дальше. Отдать пирожок?', speaker)) {
      game.sayPhrase('Братец Лис стал кричать на Красную Шапочку, она испугалась и побежала домой.', speaker);
      game.sayPhrase('GAME OVER!', speaker);
      hero.exit = true;
      return hero;
    }
    game.sayPhrase(`Пирожков в корзинке - ${hero.count} штук`, speaker);
  } else game.sayPhrase('Отлично, это правильный ответ!', speaker);

  game.sayPhrase(smallGirlSpeech, speaker);
  hero = question(hero, wayTasks[2]);
  if (!hero.win) {
    if (!game.askQuestion('Отдать один пирожок, чтобы пройти дальше', speaker)) {
      game.sayPhrase('Красная Шапочка так и не смогла понять, где находится дом девочки, а в итоге заблудилась и сама.', speaker);
      game.sayPhrase('GAME OVER!', speaker);
      hero.exit = true;
      return hero;
    }
    game.sayPhrase(`Пирожков в корзинке - ${hero.count} штук`, speaker);
  } else game.sayPhrase('Отлично, это правильный ответ!', speaker);

  game.sayPhrase(meetEnthSpeech, speaker);
  hero = question(hero, wayTasks[3]);
  if (!hero.win) {
    if (!game.askQuestion('Загадка была очень сложная, поэтому Энт попросил\n'
    + '1 пирожок, чтобы пропустить девочку дальше. Отдать пирожок?', speaker)) {
      game.sayPhrase('Красная Шапочка не дала ему пирожок. Тогда Энт посадил\n'
      + ' ее себе на плечо и с криком "Вперед на Изенгард!" куда-то побежал.', speaker);
      game.sayPhrase('GAME OVER!', speaker);
      hero.exit = true;
      return hero;
    }
    game.sayPhrase(`Пирожков в корзинке - ${hero.count} штук`, speaker);
  } else game.sayPhrase('Отлично, это правильный ответ!', speaker);

  game.sayPhrase('Энт сказал, что теперь до дома бабушки осталось всего пара поворотов\n'
   + 'дороги, и Красная шапочка, поблагодарив стража леса, поскакала дальше', speaker);
  return hero;
};

import record from './fs-record.js';
import question from './question.js';
import * as game from './red-hat.js';
import { speaker } from './avatars.js';

const meetWolf = 'Наконец Красная шапочка добралась до домика бабушки, но перед ним ее\n'
+ 'поджидал Злой Волк. Он попытался запугать Красную Шапочку и съесть ее, но\n'
+ 'она была настойчива и смела. Она смогла убедить волка пока что не нападать\n'
+ 'на нее и предложила ответить на его самый сложный вопрос. Волк стал думать,\n'
+ 'что же за вопрос задать девочке. Но он даже не догадывался, что Красная\n'
+ 'Шапочка только тянула время, а на самом деле незаметно вызывала со своего\n'
+ 'телефона ГБР, к домику бабушки.';

const wrongAnswer = 'Это был такой сложный вопрос, что волк запросил 2 пирожка за то, чтобы\n'
+ 'подсказать девочке. Что же она выбрала, отдать пирожки или нет?';

const fin = 'Хотя Красная Шапочка ответила правильно, волк все равно захотел ее съесть.\n'
+ 'К счастью, ГБР уже приехала и спасла девочку. Та поспешила в дом к\n'
+ 'бабушке, чтобы радостно сообщить, что принесла ей пирожки';

const sevenPiys = 'Бабушка была очень рада, что у нее такая умная внучка, и посоветовала ей\n'
+ 'записаться на курсы программирования в Хекслете...';

const treePiys = 'Бабушка была расстроена, что ее внучка не смогла донести все пирожки, но решила просто вызвать\n'
+ 'Яндекс.еду и заказать еще много разной еды...';

const twoPiys = 'Бабушка была очень расстроена, что пирожков так мало...';

const theEnd = 'КОНЕЦ!\n\n'
+ 'Ты можешь найти свой результат в таблице рекордов';

export default (currentHero) => {
  game.sayPhrase(meetWolf, speaker);
  const hero = question(currentHero, 6);
  if (!hero.win) {
    if (!game.askQuestion(wrongAnswer, speaker)) {
      game.sayPhrase('Красная Шапочка ответила не верно и не отдала пирожки, а ГБР так и не успело приехать...', speaker);
      game.sayPhrase('GAME OVER!', speaker);
      hero.exit = true;
      return hero;
    }
    game.sayPhrase(`'Пирожков в корзинке - ${hero.count} штук'`, speaker);
    game.sayPhrase(fin, speaker);
    console.log(hero.count); // УБРАТЬ ЧУТЬ ПОЗЖЕ, ДЕБАГ
  }
  switch (hero.count) {
    case 7:
      game.sayPhrase(sevenPiys, speaker);
      break;
    case 6:
    case 5:
    case 4:
    case 3:
      game.sayPhrase(treePiys, speaker);
      break;
    default:
      game.sayPhrase(twoPiys, speaker);
  }
  hero.finishTime = new Date();
  hero.totalTimeInSeconds = (hero.finishTime - hero.startTime) / 1000;
  record(hero); // должна записывать результат героя в таблицу
  game.sayPhrase(theEnd, speaker);
  game.sayPhrase(`${hero.totalTime}`, speaker);
  // console.clear();
  return NaN;
};

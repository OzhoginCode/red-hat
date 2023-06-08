import readlineSync from 'readline-sync';

const startMenu = () => {
  const name = readlineSync.question(
    'Добро пожаловать в игру "Сказочный замес"! Как тебя зовут, герой? ',
  );
  const menuItems = ['Новая игра', 'Таблица рекордов'];
  const index = readlineSync.keyInSelect(
    menuItems,
    'Выберите пункт меню:',
    { cancel: 'Выйти из игры' },
  );

  console.log(`${name}, вы выбрали ${menuItems[index]}!`);
  return index;
};

export default startMenu;

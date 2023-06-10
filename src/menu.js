import readlineSync from 'readline-sync';

const startMenu = () => {
  const menuItems = ['Новая игра', 'Таблица рекордов'];
  const index = readlineSync.keyInSelect(
    menuItems,
    'Выберите пункт меню:',
    { cancel: 'Выйти из игры' },
  );
  return index;
};
export default startMenu;

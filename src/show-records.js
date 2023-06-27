import readlineSync from 'readline-sync';
import { getDataFromFile } from './fs.js';

export default () => {
  console.clear();
  const records = getDataFromFile('./userdata/top-list.json');

  if (JSON.stringify(records) === '{}') console.log('Список рекордов пока пуст\n');

  const keys = Object.keys(records);
  const values = Object.values(records);

  const maxNameLength = Math.max(...keys.map((name) => name.length));
  const maxResultLength = Math.max(...values.map((result) => result.toString().length));

  Object.entries(records).forEach(([name, result]) => {
    const paddedName = name.padEnd(maxNameLength);
    const paddedResult = result.toString().padStart(maxResultLength);
    console.log(`${paddedName}\t\t${paddedResult}`);
  });

  readlineSync.keyIn('\n\nНажми любую клавишу, чтобы выйти в главное меню...');
};

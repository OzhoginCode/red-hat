import { writeToFile } from './fs.js';

export default (hero) => {
  const path = './content/';
  const data = JSON.stringify(hero, null, 2);
  writeToFile(path, data);
};

import { writeToFile } from './fs';

export default (hero) => {
  const path = '../content/top-list2.js';
  writeToFile(path, hero);
};

import * as fs from 'node:fs';
import path from 'node:path';
import { writeToFile } from './fs.js';

export default (hero) => {
  const correctPath = path.resolve(process.cwd(), './userdata/top-list.json');
  const pathN = './userdata/';
  const table = JSON.parse(fs.readFileSync(correctPath));
  fs.truncateSync(correctPath);
  const {
    name, score, count, totalTimeInSeconds,
  } = hero;
  const newResult = Math.floor(count * 2 + score - totalTimeInSeconds / 10);
  if (name in Object.keys(table)) {
    if (newResult < table[name]) return NaN;
  }
  const newTable = { ...table, [name]: newResult };
  const data = JSON.stringify(newTable, null, 2);
  writeToFile(pathN, data);
  return NaN;
};

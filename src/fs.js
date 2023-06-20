import * as fs from 'node:fs';
import path from 'node:path';

function getDataFromFile(filepath) {
  const correctPath = path.resolve(process.cwd(), filepath);
  const rawdata = fs.readFileSync(correctPath);
  return JSON.parse(rawdata);
}

function writeToFile(directory, data) {
  const filename = 'top-list2.json';

  if (!fs.existsSync(directory)) fs.mkdirSync(directory);

  fs.appendFileSync(directory + filename, data);
}

export default getDataFromFile;
export { writeToFile };

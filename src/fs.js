import * as fs from 'node:fs';
import path from 'node:path';

function getDataFromFile(filepath) {
  const correctPath = path.resolve(process.cwd(), filepath);
  const rawdata = fs.readFileSync(correctPath);
  return JSON.parse(rawdata);
}

function writeToFile(directory, data) {
  const filename = 'top-list.json';
  const filePath = directory + filename;

  if (!fs.existsSync(directory)) fs.mkdirSync(directory);

  if (fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, data);
    return;
  }

  fs.appendFileSync(filePath, data);
}

export { writeToFile, getDataFromFile };

import { writeToFile } from './fs.js';

const createTopList = () => {
  const directory = './userdata/';
  const data = '{}';

  writeToFile(directory, data);
};

createTopList();

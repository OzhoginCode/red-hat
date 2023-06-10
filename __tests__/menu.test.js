// eslint-disable-next-line import/no-extraneous-dependencies
import { test, expect } from '@jest/globals';
import startMenu from '../src/menu.js';

test('Menu working check', () => {
  expect(startMenu('serge', 2)).not.toEqual(undefined);
});

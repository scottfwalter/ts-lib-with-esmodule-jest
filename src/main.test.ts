import { hello, todayIs } from './main';

test('say hello', () => {
  expect(hello()).toEqual('hello world');

  const value = todayIs();
  expect(todayIs()).toEqual(value);
});
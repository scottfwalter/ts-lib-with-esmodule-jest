import { hello, todayIs } from './main';

test('say hello', () => {
  expect(hello()).toEqual('hello world');
  expect(todayIs()).toEqual('Today is a Friday');
});
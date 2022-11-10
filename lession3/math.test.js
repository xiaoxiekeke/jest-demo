import { add, minus, multi } from "./math"
test('测试加法：3+7', function () {
  expect(add(3, 7)).toBe(10)
})
test('测试减法：6-3', function () {
  expect(minus(6, 3)).toBe(3)
})
test('测试乘法：3*7', function () {
  expect(multi(3, 7)).toBe(21)
})
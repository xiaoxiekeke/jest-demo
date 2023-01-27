// jest 对dom进行测试
// jest 在node环境中自己模拟了一套dom的api，jsDom
import addDivToBody from "./demo";
import $ from 'jquery'

test('测试 addDivToBody', () => {
  addDivToBody()
  console.log($('body').find('div').length)
  expect($('body').find('div').length).toBe(1)
})
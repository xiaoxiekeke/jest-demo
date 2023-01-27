// 从__mocks__文件夹中寻找Util的定义来进行模拟
jest.mock('./util')
// 如果__mocks__文件夹中没有对应的文件，则模拟util类 ，将util中的构造函数和util中的每一个方法都自动替换成jest.fn
// 相当于：
// const Util = jest.fn()
// Util.prototype.a = jest.fn()
// Util.prototype.b=jest.fn()
// 由于Util中的方法很复杂，当测试demo的时候不需要关注util类的实现逻辑，所以在测试demo的时候不需要真正调用Util中的方法，以提高测试性能（单元测试）


// 从回调函数中寻找Util的定义来进行模拟
// jest.mock('./util', () => {
//   const Util = jest.fn(() => {
//     console.log("constructor")
//   })
//   Util.prototype.a = jest.fn(() => {
//     console.log("a")
//   })
//   Util.prototype.b = jest.fn(() => {
//     console.log("b")
//   })
//   return Util
// })


import Util from "./util";

import demoFunction from "./demo";
test('测试 demoFunction', () => {
  demoFunction()
  console.log(Util.mock)
  expect(Util).toHaveBeenCalled()
  expect(Util.mock.instances[0].a).toHaveBeenCalled()
  expect(Util.mock.instances[0].b).toHaveBeenCalled()
})
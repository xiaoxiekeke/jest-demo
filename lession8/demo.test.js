//jest中mock的用法

import { runCallBack, createObject } from "./demo";
// 需要定义一个fn 来测试runCallBack 函数，runCallBack函数中还必须返回结果，需要改变了原函数的定义
test('测试 runCallBack', () => {
  const fn = () => {
    return "hello"
  }
  expect(runCallBack(fn)).toBe("hello")
})

//jest.fn() mock函数可以捕获函数的调用
test('测试 runCallBack', () => {
  const func = jest.fn()
  runCallBack(func)
  expect(func).toBeCalled()
})

//jest.fn() mock出来的函数，可以通过func.mock.calls.length判断调用了几次
test('测试 jest.fn()', () => {
  const func = jest.fn()
  runCallBack(func)
  runCallBack(func)
  console.log(func.mock)
  expect(func.mock.calls.length).toBe(2)
})

// jest.fn可以定义mock的函数，给mock的函数添加返回值
test('测试 jest.fn()添加返回值', () => {
  const func = jest.fn(() => {
    return "abc"
  })

  runCallBack(func)
  console.log(func.mock)
  expect(func.mock.calls.length).toBe(1)
})

// jest.fn可以通过mockReturnValueOnce、mockReturnValue 方法自由的设置返回结果
// mockImplementation、mockImplementationOnce可以模拟函数实现
test('测试 通过mockReturnValueOnce、mockReturnValue 方法mock 返回值', () => {
  const func = jest.fn()
  //支持链式调用
  func.mockReturnValueOnce("xiaoke").mockReturnValueOnce("hicks").mockReturnValueOnce("xiaoxiekeke")
  //也可以一次调用多个返回值
  func.mockReturnValue("xiaoke")
  // 模拟函数实现，类似jest.fn()，
  func.mockImplementation(() => {
    return "abc"
  })
  // 模拟函数实现一次
  func.mockImplementationOnce(() => {
    return "abc"
  })


  func.mockImplementationOnce(() => {
    return this
  })
  //等价于上面返回this值
  func.mockReturnThis()
  runCallBack(func)
  runCallBack(func)
  runCallBack(func)
  runCallBack(func)
  console.log(func.mock)
  expect(func.mock.calls.length).toBe(4)
  // 根据返回值写测试用例
  expect(func.mock.results[0].value).toBe("xiaoke")

  // 判断调用参数的用例：
  // 第一次调用参数是xiaoke
  expect(func.mock.calls[0]).toEqual(["xiaoke"])
  // 每次调用参数都是小可
  expect(func).toBeCalledWith("xiaoke")
})

test('测试 Mock函数用作构造函数，则mock.instances中有值', () => {
  const func = jest.fn()
  const obj = createObject(func)
  console.log(func.mock)
  expect(func.mock.calls.length).toBe(1)
})
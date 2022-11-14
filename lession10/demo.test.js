// 对demo模块进行模拟，引入__mocks__文件夹下的fetchData
jest.mock('./demo')
// 取消对mock模块的模拟
// jest.unmock('./demo')

// jest.config.js中：automock: true,
// 表示自动寻找__mocks__文件中是否有同名的文件，如果有的话在文件中开启该文件的mock  jest.mock('./demo')

// mock 接口
import { fetchData } from "./demo";
// 从实际文件中拿取方法
const { getNumber } = jest.requireActual("./demo")


// 使用__mocks__文件夹下的fetchData来模拟测试方法
test("fetchData 测试", () => {
  return fetchData().then(data => {
    expect(eval(data)).toBe(123)
  })
})


// test("fetchData2 测试", () => {
//   axios.get.mockResolvedValue({
//     data: "function(){return '123'})()",
//   });
//   return fetchData().then(data => {
//     console.log(data)
//     expect(eval(data)).toEqual(123)
//   })
// })


// 测试方法中模拟参数
test("fetchData 测试2", () => {
  const fetchData2 = jest.fn().mockResolvedValue("(function(){return '123'})()");
  return fetchData2().then((data) => {
    console.log(data)
    expect(eval(data)).toEqual("123");
  });
});


// 测试同步的getNumber方法
test("getNumber 测试", () => {
  expect(getNumber()).toEqual(123);
});
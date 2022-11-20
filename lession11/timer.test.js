import {
  timer,
  timer2
} from "./timer";
// 设置jest测试用例超时时间（默认5S）：jest.setTimeout(30000);

// 1、采用done函数等待setTimeout用例执行完毕
// test("timer 测试", function (done) {
//   timer(() => {
//     expect(1).toBe(1)
//     done()
//   })
// })

// 2、useFakeTimers和runAllTimers，可以避免运行异步函数的等待时间
beforeEach(() => {
  //放在beforeEach中，可以避免定时器之间相互影响
  jest.useFakeTimers()
})
test("runAllTimers测试", function () {
  const fn = jest.fn()
  timer(fn)
  jest.runAllTimers()
  expect(fn).toHaveBeenCalledTimes(1)
})

// 3、runOnlyPendingTimers，只运行处于队列中的timmer
test("runOnlyPendingTimers 测试", function () {
  const fn = jest.fn()
  timer2(fn)
  jest.runOnlyPendingTimers()
  expect(fn).toHaveBeenCalledTimes(1)
})

// 4、advanceTimersByTime，快进Timers时间进行测试
test("advanceTimersByTime 测试", function () {
  const fn = jest.fn()
  timer2(fn)
  jest.advanceTimersByTime(3000)
  expect(fn).toHaveBeenCalledTimes(1)
})
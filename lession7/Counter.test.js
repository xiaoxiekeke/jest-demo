// jest 中的钩子函数beforeAll、afterAll、beforeEach、afterEach
// jest 中的分组语法 describe
// 每个 describe 都可以有自己的钩子函数，只对当前describe下的所有测试用例生效
// 钩子函数执行顺序： 外beforeAll 内beforeAll 外beforeEach 内beforeEach 执行测试用例 afterEach afterAll
// describe中的准备型的代码会跑到所有测试用例执行之前进行执行
import Counter from "./Counter"
describe("测试Counter相关的代码", () => {
  let counter = null
  // 所有测试用例执行之前
  beforeAll(() => {
    console.log("beforeAll")
  })

  // 所有测试用例执行之后
  afterAll(() => {
    console.log("afterAll")
  })

  // 每个测试用例执行之前
  beforeEach(() => {
    console.log("beforeEach")
    counter = new Counter
  })

  // 每个测试用例执行之后
  afterEach(() => {
    console.log("afterEach")
  })


  describe("测试增加相关的代码", () => {
    test('测试Counter中的addOne方法', () => {
      counter.addOne()
      expect(counter.number).toBe(1)
    })
    test('测试Counter中的addTwo方法', () => {
      counter.addTwo()
      expect(counter.number).toBe(2)
    })
  })

  describe("测试减少相关的代码", () => {
    test('测试Counter中的minusOne方法', () => {
      counter.minusOne()
      expect(counter.number).toBe(-1)
    })
    test('测试Counter中的minusTwo方法', () => {
      counter.minusTwo()
      expect(counter.number).toBe(-2)
    })
  })



})

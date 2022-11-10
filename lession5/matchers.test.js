test('测试10与10相匹配', function () {
  // toBe 匹配器 matchers 
  // 类似 Object.is ===
  expect(10).toBe(10)

  // 执行不成功
  // const a = { one: 1 }
  // expect(a).toBe({ one: 1 })
})

test('测试对象内容相等', function () {
  // toEqual 匹配器
  const a = { one: 1 }
  expect(a).toEqual({ one: 1 })
})

// 真假有关的匹配器
test('toBeNull 匹配器', function () {
  const a = null
  expect(a).toBeNull()
})

// 真假有关的匹配器
test('toBeUndefined 匹配器', function () {
  const a = undefined
  expect(a).toBeUndefined()
})

// 真假有关的匹配器
test('toBeDefined 匹配器', function () {
  const a = null
  expect(a).toBeDefined()
})

// 真假有关的匹配器
test('toBeTruthy 匹配器', function () {
  const a = true
  expect(a).toBeTruthy()
})

// 真假有关的匹配器
test('toBeFalsy 匹配器', function () {
  const a = 0
  expect(a).toBeFalsy()
})

// not匹配器
test('not匹配器', function () {
  const a = 1
  expect(a).not.toBeFalsy()
  const b = 0
  expect(b).not.toBeTruthy()
})

// 数字相关的匹配器
test('toBeGreaterThan', function () {
  const a = 10
  expect(a).toBeGreaterThan(2)
})

// 数字相关的匹配器
test('toBeLessThan', function () {
  const a = 10
  expect(a).toBeLessThan(20)
})

// 数字相关的匹配器
test('toBeGreaterThanOrEqual', function () {
  const a = 10
  expect(a).toBeGreaterThanOrEqual(10)
})

// 数字相关的匹配器
test('toBeLessThanOrEqual', function () {
  const a = 10
  expect(a).toBeLessThanOrEqual(10)
})

// 浮点数字相关的匹配器
test('toBeCloseTo', function () {
  const a = 0.1
  const b = 0.2
  expect(a + b).toBeCloseTo(0.3)
})

// 字符串相关的匹配器
test('toMatch', function () {
  const str = "http://xiaoxiekeke.com"
  expect(str).toMatch(/xiaoxiekeke/)//可以匹配正则
  expect(str).toMatch("xiaoxiekeke")
})

// Array Set相关的匹配器
test('toContain', function () {
  const arr = ["aaa", "bbb", "ccc"]
  const set = new Set(arr)
  expect(arr).toContain("aaa")
  expect(set).toContain("bbb")
})

const throwErrorFunction = () => {
  throw new Error("this is a new error")
}
// 异常相关的匹配器
test('toThrow', function () {
  expect(throwErrorFunction).toThrow()
  expect(throwErrorFunction).toThrow("this is a new error")
  expect(throwErrorFunction).toThrow(/this is a new error/) //支持正则
  // 不通过
  // expect(throwErrorFunction).toThrow("this is a old error")
  // 不通过
  // expect(throwErrorFunction).not.toThrow()
})


// 命令行工具：
// Press a to run all tests. 运行所有文件的测试用例 jest --watchAll 默认进入o模式
// Press f to run only failed tests. 只运行报错的测试用例
// Press o to only run tests related to changed files. 只运行和当前所改变文件相关的测试用例（使用此命令必须用git管理仓库代码）jest --watch 默认进入o模式
// Press p to filter by a filename regex pattern.根据测试用例文件名称的正则表达式筛选要执行的测试用例（jest --watchAll时p模式才存在）
// Press t to filter by a test name regex pattern.根据测试用例名称的正则表达式筛选要执行的测试用例
// Press q to quit watch mode. 退出对代码的监控
// Press Enter to trigger a test run.执行测试用例
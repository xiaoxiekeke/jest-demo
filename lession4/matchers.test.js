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
test('toBeFalsy 匹配器', function () {
  const a = 1
  expect(a).not.toBeFalsy()
  const b = 0
  expect(b).not.toBeTruthy()
})

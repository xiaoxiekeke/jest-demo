import {
  fetchData,
  fetchData2,
  fetchData3,
} from "./fetchData";
test('fetchData 返回结果{success: true}', function (done) {
  fetchData((data) => {
    expect(data).toEqual({
      success: true
    })
    // 调用了done 才代表测试用例执行完成
    done();
  })
})

//需返回promise
test('fetchData2 返回结果{success: true}', function () {
  return fetchData2().then((res) => {
    expect(res.data).toEqual({
      success: true
    })
  })
})

// 接口取回的数据包含toMatchObject中的对象即可通过测试
test('fetchData2 返回结果{success: true}', function () {
  return expect(fetchData2()).resolves.toMatchObject({
    data: {
      success: true
    }
  })
})

// async await语法
test('fetchData2 返回结果{success: true}', async () => {
  await expect(fetchData2()).resolves.toMatchObject({
    data: {
      success: true
    }
  })
})

test('fetchData3 返回结果为404', function () {
  //保证至少执行1次expect语法，否则当接口请求成功的时候，也不走catch，执行不到测试用例
  expect.assertions(1)
  return fetchData3().catch((err) => {
    expect(err.toString().indexOf(404) !== -1).toBe(true)
  })
})

// 接口取回的数据包含抛出异常，则匹配成功
test('fetchData3 返回结果为404', function () {
  return expect(fetchData3()).rejects.toThrow()
})

// async await语法
test('fetchData3 返回结果为404', async () => {
  await expect(fetchData3()).rejects.toThrow()
})
// 异步代码测试方法
import axios from "axios"
export const fetchData = (fn) => {
  axios.get("http://www.dell-lee.com/react/api/demo.json").then(res => {
    fn(res.data)
  })
}

export const fetchData2 = () => {
  return axios.get("http://www.dell-lee.com/react/api/demo.json")
}

//此资源不存在
export const fetchData3 = () => {
  return axios.get("http://www.dell-lee.com/react/api/demo1.json")
}

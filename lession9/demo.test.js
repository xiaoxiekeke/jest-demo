// snapshot快照测试
// 适合配置文件的生成测试
import { generateConfig, generateAnotherConfig } from "./demo";

test("测试 generateConfig 函数", () => {
  // 第一次测试的时候会在__snapshots__文件夹中生成快照文件
  // 当源文件发生变化时，与之前保存的__snapshots__不匹配时，则会报错
  expect(generateConfig()).toMatchSnapshot();

  // 提供两种关于snapshot的命令行工具
  // 1、Press u to update failing snapshots 更新失败的快照
  // 2、Press i to update failing snapshots interactively. 交互式更新失败的快照(用于一个个更新快照时)

  expect(generateAnotherConfig()).toMatchSnapshot({
    time: expect.any(Date) //当快照中某一项是动态生成的，采用这种方式可使快照通过
  });

  // 生成行内快照
  // 1. 安装npm i prettier@1.18.2 --save
  // 2. toMatchInlineSnapshot 生成行内快照
  expect(generateAnotherConfig()).toMatchInlineSnapshot(
    {
      time: expect.any(Date)
    },
    `
    Object {
      "domain": "localhost",
      "port": 8081,
      "server": "http://localhost",
      "time": Any<Date>,
    }
  `
  );
});

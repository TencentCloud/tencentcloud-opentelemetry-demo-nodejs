# Node HTTP 接入 OpenTelemetry 示例代码

本示例使用 `@opentelemetry/instrumentation-http` 对 Node HTTP 模块进行插桩，自动对 HTTP IncomingMessage & OutgoingMessage 请求和响应进行上报。

## 使用指引

安装依赖：

```bash
npm install
```

启动服务端：

```bash
npm run server
```

开启另一个 terminal ，启动客户端：

```bash
npm run client
```

上报的链路信息会打印在对应控制台。

## 上报应用性能观测apm

本示例代码默认会上报apm，但需要确认当前执行环境的网络策略是否通畅：

```bash
telnet ap-guangzhou.apm.tencentcs.com:4317
```

如果策略可通，那么可以前往 [应用性能观测](https://console.cloud.tencent.com/apm/monitor/span) 搜索并查看上报的链路信息。

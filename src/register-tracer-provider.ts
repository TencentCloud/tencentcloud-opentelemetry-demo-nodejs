import type { TracerProvider } from '@opentelemetry/api';
import { AsyncLocalStorageContextManager } from '@opentelemetry/context-async-hooks';
import {
  AlwaysOnSampler,
  ParentBasedSampler,
  TraceIdRatioBasedSampler,
} from '@opentelemetry/core';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-grpc';
import type { Resource } from '@opentelemetry/resources';
import {
  ConsoleSpanExporter,
  BasicTracerProvider,
  SimpleSpanProcessor,
} from '@opentelemetry/sdk-trace-base';

/**
 * 注册并返回 opentelemetry tracer provider
 */
export const registerTracerProvider = (resource: Resource): TracerProvider => {
  // 由于 @opentelemetry/sdk-trace-node 的 NodeTracerProvider 集成了很多包，导致依赖比较臃肿
  // 所以我们建议使用 @opentelemetry/sdk-trace-base 的 BasicTracerProvider 来按需加载
  const tracerProvider = new BasicTracerProvider({
    // 服务相关的 resource 描述，会在所有上报的 Span 中加入这些 Tags
    resource,
  });

  // 如果要将 trace 信息上报apm，请使用 grpc OTLPTraceExporter 上报至对应 URL
  tracerProvider.addSpanProcessor(
    new SimpleSpanProcessor(
      new OTLPTraceExporter({
        // apm-collector URL（配置上报的实例地址）
        url: 'grpc://ap-guangzhou.apm.tencentcs.com:4317', // 替换成控制台上获得的接入点
        concurrencyLimit: 200,
      }),
    ),
  );

  // 开发测试时，可以添加 ConsoleSpanExporter “上报”至控制台
  tracerProvider.addSpanProcessor(
    new SimpleSpanProcessor(new ConsoleSpanExporter()),
  );

  // 全局注册 tracerProvider
  tracerProvider.register({
    // Node v14.8.0 以上可以使用 AsyncLocalStorageContextManager
    // Node v14.8.0 以下可以使用 AsyncHooksContextManager
    // 注意不要忘记最后的 enable()
    contextManager: new AsyncLocalStorageContextManager().enable(),
  });

  return tracerProvider;
};

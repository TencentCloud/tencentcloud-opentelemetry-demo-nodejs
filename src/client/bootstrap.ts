import { registerInstrumentations } from '@opentelemetry/instrumentation';
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
import { getResource } from '../get-resource';
import { registerTracerProvider } from '../register-tracer-provider';

/**
 * 初始化 Opentelemetry SDK
 */
export const bootstrap = async (): Promise<void> => {
  // 获取上报 resource
  const resource = await getResource();

  // 注册 tracer provider
  const tracerProvider = registerTracerProvider(resource);

  // 注册 instrumentation 自动插桩
  registerInstrumentations({
    tracerProvider,
    instrumentations: [
      // 启用 http 插桩
      new HttpInstrumentation({
        headersToSpanAttributes: {
          client: {
            // 额外上报客户端请求的 X-Foo-Bar header
            requestHeaders: ['X-Foo-Bar'],
          },
        },
        // 客户端忽略发起的 /health-check 请求
        ignoreOutgoingUrls: ['/health-check'],
      }),
    ],
  });
};

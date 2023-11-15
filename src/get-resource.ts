import { Resource } from '@opentelemetry/resources';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';
import { ApmResourceAttributes } from './ApmResourceAttributes';

/**
 * 获取上报的服务资源标签
 */
export const getResource = async (): Promise<Resource> => {
  // 如果要上报apm，请添加这些字段。
  // 服务名称等基础字段。更多字段可参考 @opentelemetry/semantic-conventions
  return new Resource({
    // 服务名称（在“应用列表”或“调用链”等地方显示对应的服务）
    [SemanticResourceAttributes.SERVICE_NAME]: 'node_simple_server',
    // token（上报鉴权）
    [ApmResourceAttributes.APM_TOKEN]: 'xxxxxxxxxxxxxx', // 替换成控制台上获得的Token
    [ApmResourceAttributes.APP_ID]: 'node_simple_server',
    [ApmResourceAttributes.SERVER_ID]: 'node_simple_server',
    [ApmResourceAttributes.SERVER_OWNER]: 'foo;bar',
  })
};

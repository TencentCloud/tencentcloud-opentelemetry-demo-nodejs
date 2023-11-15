import { bootstrap } from './bootstrap';

/**
 * 服务入口文件
 */
const main = async (): Promise<void> => {
  // 注意 bootstrap 需要在 import http 之前调用，确保插桩可以生效
  await bootstrap();

  const { startServer } = await import('./start-server');
  startServer();
};

main();

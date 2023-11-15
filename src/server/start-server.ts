import * as http from 'http';
import { HOST, PORT } from '../config';

/**
 * 创建并启动 http server
 */
export const startServer = (): void => {
  const server = http.createServer((req, res) => {
    res.write('Hello, world!');
    res.end();
  });
  server.listen(PORT, HOST, () => {
    console.log(`http server is listening at http://${HOST}:${PORT}`);
  });
};

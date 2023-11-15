import * as http from 'http';
import { HOST, PORT } from '../config';

/**
 * 通过 http client 并发起请求
 */
export const startClient = (): void => {
  // 向 http server 发送请求
  const req = http.request(
    {
      hostname: HOST,
      port: PORT,
      method: 'GET',
      headers: {
        'X-Foo-Bar': 'foobar',
      },
    },
    (res) => {
      res.on('data', (data) => {
        console.log(data.toString());
      });
    },
  );
  req.end();
};

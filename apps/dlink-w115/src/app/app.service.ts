import { Injectable } from '@nestjs/common';
import WebSocketClient = require('dlink_websocketclient');

@Injectable()
export class AppService {
  async getSocketStatus(): Promise<{ status: boolean }> {
    const client = new WebSocketClient({
      ip: '10.40.196.67',
      pin: '847019',
    });

    const logged = await client.login();

    if (logged) {
      const status = await client.state();
      client.disconnect();
      return { status };
    }

    client.disconnect();
    return { status: null };
  }

  async toggleSocket(): Promise<{ status: boolean }> {
    const client = new WebSocketClient({
      ip: '10.40.196.67',
      pin: '847019',
    });

    const logged = await client.login();

    if (logged) {
      let status = await client.state();

      await client.switch(!status);

      status = await client.state();

      client.disconnect();
      return { status };
    }

    client.disconnect();
    return { status: null };
  }
}

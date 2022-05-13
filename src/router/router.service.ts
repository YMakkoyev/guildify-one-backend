import { Injectable } from '@nestjs/common';

@Injectable()
export class RouterService {
  getHello(): string {
    return 'Hello World!';
  }
}

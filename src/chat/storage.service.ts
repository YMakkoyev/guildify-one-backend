import { Injectable } from '@nestjs/common';
import { ChatService } from './chat.service';

@Injectable()
export class StorageService {
  constructor(private readonly chatService: ChatService) {}

  getHello(): string {
    return this.chatService.getHello();
  }
}

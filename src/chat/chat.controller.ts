import { Controller, Get } from '@nestjs/common';
import { ChatService } from './chat.service';
import { StorageService } from './storage.service';

@Controller('chat')
export class ChatController {
  constructor(
    private readonly chatService: ChatService,
    private readonly storageService: StorageService,
  ) {}

  @Get('hello')
  getHello(): string {
    return this.chatService.getHello();
  }

  @Get('storage')
  getStorageId(): string {
    return this.storageService.getHello();
  }
}

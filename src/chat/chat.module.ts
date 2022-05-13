import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { StorageService } from './storage.service';
import { ChatController } from './chat.controller';

@Module({
  providers: [ChatService, StorageService],
  controllers: [ChatController],
})
export class ChatModule {}

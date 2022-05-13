import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RouterModule } from './router/router.module';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [RouterModule, ChatModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

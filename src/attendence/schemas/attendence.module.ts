import { Module } from '@nestjs/common';
import { ChatGateway } from './chat.gateway';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';
// de aqui
import { MongooseModule } from '@nestjs/mongoose';
import { attendence, attendenceSchema } from './schemas/attendenceSchema';
// hasta aqui

@Module({
  imports: [
    // adicionar esto
    MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema }]),
    //hasta aqui
  ],
  controllers: [ChatController],
  providers: [ChatService, ChatGateway],
})
export class ChatModule {}
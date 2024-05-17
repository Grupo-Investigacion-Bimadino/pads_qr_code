import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './events/events.module';
import { UsersModule } from './users/users.module';
import { TicketModule } from './ticket/ticket.module';
import { LogsModule } from './logs/logs.module';


@Module({
  imports: [EventsModule, UsersModule, TicketModule, LogsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

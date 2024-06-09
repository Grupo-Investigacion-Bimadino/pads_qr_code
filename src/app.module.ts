import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';

import { AppService } from './app.service';
import { EventsModule } from './events/events.module';
import { UsersModule } from './users/users.module';
import { TicketModule } from './ticket/ticket.module';
import { LogsModule } from './logs/logs.module';


@Module({
  ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
 ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'client') }),
 MongooseModule.forRoot(process.env.DB_URI),
  imports: [EventsModule, UsersModule, TicketModule, LogsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

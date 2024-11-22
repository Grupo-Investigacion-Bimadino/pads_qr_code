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
// import { LogsModule } from './logs/logs.module';
import { AttendenceController } from './attendence/attendence.controller';
import { AttendenceModule } from './attendence/attendence.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'client') }),
    // MongooseModule.forRoot(process.env.DB_URI),
    MongooseModule.forRoot(
      'mongodb+srv://aagamezibarra69:GFJuOQ7gUB6duFZI@cluster0.myaid.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
    EventsModule,
    UsersModule,
    TicketModule,
   AttendenceModule,
    // LogsModule,
  ],

  controllers: [AppController, AttendenceController],
  providers: [AppService],
})
export class AppModule {}

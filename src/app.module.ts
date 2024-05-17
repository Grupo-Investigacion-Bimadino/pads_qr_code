import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventosModule } from './eventos/eventos.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TicketModule } from './ticket/ticket.module';
import { AsistenciaModule } from './asistencia/asistencia.module';

@Module({
  imports: [EventosModule, UsuariosModule, TicketModule, AsistenciaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

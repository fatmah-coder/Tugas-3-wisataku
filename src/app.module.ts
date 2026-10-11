import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { DestinasiModule } from './destinasi/destinasi.module.js';

@Module({
  imports: [PrismaModule, DestinasiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
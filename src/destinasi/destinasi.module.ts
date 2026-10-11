import { Module } from '@nestjs/common';
import { DestinasiService } from './destinasi.service.js';
import { DestinasiController } from './destinasi.controller.js';

@Module({
  controllers: [DestinasiController],
  providers: [DestinasiService],
})
export class DestinasiModule {}

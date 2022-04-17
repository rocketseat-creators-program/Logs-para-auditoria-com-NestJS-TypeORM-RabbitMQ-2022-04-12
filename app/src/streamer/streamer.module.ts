import { Module } from '@nestjs/common';
import { StreamerService } from './streamer.service';
import { StreamerGateway } from './streamer.gateway';
import { StreamerController } from './streamer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Streamer } from './entities/streamer.entity';
import { AuditModule } from 'src/audit/audit.module';
import { StreamerSubscriber } from './streamer.subscriber';

@Module({
  imports: [TypeOrmModule.forFeature([Streamer]), AuditModule],
  providers: [StreamerGateway, StreamerService, StreamerSubscriber],
  controllers: [StreamerController],
})
export class StreamerModule {}

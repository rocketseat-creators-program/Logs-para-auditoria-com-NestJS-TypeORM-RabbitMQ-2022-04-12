import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StreamerModule } from './streamer/streamer.module';
import { AuditModule } from './audit/audit.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      // logging: 'all',
      // logger: 'advanced-console',
    }),
    StreamerModule,
    AuditModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

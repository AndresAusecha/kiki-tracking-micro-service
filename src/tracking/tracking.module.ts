import { Module } from '@nestjs/common';
import { TrackingService } from './tracking.service';
import { TrackingController } from './tracking.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tracking } from './entities/tracking.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'kiki-db',
    port: 5432,
    password: 'postgres_password',
    username: 'postgres',
    entities: [Tracking],
    database: 'postgres',
    synchronize: true,
    logging: true,
  }), TypeOrmModule.forFeature([Tracking])],
  controllers: [TrackingController],
  providers: [TrackingService],
})
export class TrackingModule {}

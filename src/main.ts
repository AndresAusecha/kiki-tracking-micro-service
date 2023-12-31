import { NestFactory } from '@nestjs/core';
import { TrackingModule } from './tracking/tracking.module';

async function bootstrap() {
  const app = await NestFactory.create(TrackingModule);
  await app.listen(3001);
}
bootstrap();

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TrackingService } from './tracking.service';
import { CreateTrackingDto } from './dto/create-tracking.dto';

@Controller('envios')
export class TrackingController {
  constructor(private readonly trackingService: TrackingService) {}

  @Post("/:id/tracking")
  create(@Param('id') envioId: string, @Body() createTrackingDto: CreateTrackingDto) {
    return this.trackingService.create(envioId, createTrackingDto);
  }

  @Get("/:id/tracking")
  findAll(@Param('id') envioId: string) {
    return this.trackingService.findByEnvioId(envioId);
  }
}

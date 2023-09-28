import { Injectable } from '@nestjs/common';
import { CreateTrackingDto } from './dto/create-tracking.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tracking } from './entities/tracking.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TrackingService {
  constructor(
    @InjectRepository(Tracking) private readonly trackingRepository: Repository<Tracking>,
  ) {}

  create(envioId: string, createTrackingDto: CreateTrackingDto) {
    const tracking = new Tracking()
    tracking.estado = createTrackingDto.estado
    tracking.fecha = new Date(createTrackingDto.fecha)
    tracking.id_envio = envioId
    tracking.ubicacion = createTrackingDto.ubicacion
    
    return this.trackingRepository.save(tracking)
  }

  findByEnvioId(envioId: string) {
    return this.trackingRepository.findBy({ id_envio: envioId })
  }
}

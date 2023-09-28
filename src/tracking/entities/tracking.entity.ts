import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum TrackingEstadoEnum {
  RECIBIDO = 'RECIBIDO',
  EN_BODEGA = 'EN_BODEGA',
  DESPACHADO = 'DESPACHADO',
  ENTREGADO = 'ENTREGADO'
}

@Entity()
export class Tracking {
  @PrimaryGeneratedColumn()
  id_tracking: number;

  @Column({ type: 'int', nullable: false })
  id_envio: string;

  @Column({ type: 'varchar', length: 50 })
  ubicacion: string;

  @Column({ type: 'date' })
  fecha: Date

  @Column({ type: 'enum', enum: TrackingEstadoEnum  })
  estado: TrackingEstadoEnum;
}

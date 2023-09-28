import { IsEnum, IsNotEmpty } from "class-validator"
import { TrackingEstadoEnum } from "../entities/tracking.entity"

export class CreateTrackingDto {
  @IsNotEmpty()
  ubicacion: string

  @IsNotEmpty()
  fecha: Date

  @IsNotEmpty()
  @IsEnum(TrackingEstadoEnum)
  estado: TrackingEstadoEnum
}

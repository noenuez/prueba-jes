import { IsNotEmpty } from 'class-validator';

export class FiscaliaDto {
  id: number;

  @IsNotEmpty()
  nombre: string;

  @IsNotEmpty()
  descripcion: string;

  @IsNotEmpty()
  direccion: string;

  @IsNotEmpty()
  telefono: string;
  @IsNotEmpty()
  latitud: number;
  @IsNotEmpty()
  longitud: number;
}

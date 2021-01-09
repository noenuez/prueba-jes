import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'Fiscalia' })
export class Fiscalia {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column()
  direccion: string;

  @Column()
  telefono: string;

  @Column('decimal', { scale: 6, precision: 18 })
  latitud: number;

  @Column('decimal', { scale: 6, precision: 18 })
  longitud: number;
}

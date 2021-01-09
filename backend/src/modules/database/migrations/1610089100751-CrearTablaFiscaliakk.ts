import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CrearTablaFiscaliakk1610089100751 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'Fiscalia',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'nombre',
            type: 'varchar',
            length: '100',
          },
          {
            name: 'descripcion',
            type: 'varchar',
            length: '400',
          },
          {
            name: 'direccion',
            type: 'varchar',
            length: '400',
          },
          {
            name: 'telefono',
            type: 'varchar',
            length: '10',
          },
          {
            name: 'latitud',
            type: 'decimal',
            precision: 18,
            scale: 6,
            isNullable: true,
          },
          {
            name: 'longitud',
            type: 'decimal',
            precision: 18,
            scale: 6,
            isNullable: true,
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Fiscalia');
  }
}

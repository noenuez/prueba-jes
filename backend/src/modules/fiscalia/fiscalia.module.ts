import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FiscaliaController } from './fiscalia.controller';
import { FiscaliaRepository } from './fiscalia.repository';

@Module({
  imports: [TypeOrmModule.forFeature([FiscaliaRepository])],
  exports: [TypeOrmModule,],
  controllers: [FiscaliaController]
})
export class FiscaliaModule {}

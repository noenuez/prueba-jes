/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { Page } from '../shared/models/page';
import { Paginable } from '../shared/models/paginable';
import { FiscaliaDto } from './fiscalia-dto';
import { Fiscalia } from './fiscalia.entity';
import { FiscaliaRepository } from './fiscalia.repository';

@Controller('fiscalia')
export class FiscaliaController {
    /**
     *
     */
    constructor(
      @InjectRepository(Fiscalia)
      private fiscaliaRepository: FiscaliaRepository,
    ) {}
  
    @Get()
    async getAll(@Query() paginable: Paginable): Promise<Page<Fiscalia>> {
      return this.fiscaliaRepository.paginate(paginable);
    }

    @Get("fiscalia/:id")
    async getHello(@Param('id', ParseIntPipe) id: number) : Promise<FiscaliaDto> {
  
      const result = await this.fiscaliaRepository.findOne(id);
      return plainToClass(FiscaliaDto, result);;
    }
  
    @Post()
    async guardar(@Body() request: FiscaliaDto): Promise<FiscaliaDto> {
      const fiscalia = { ...request } as Fiscalia;
      const result = await this.fiscaliaRepository.save(fiscalia);
      return plainToClass(FiscaliaDto, result);
    }
  
    @Put(':id')
    async actualizar(
      @Param('id', ParseIntPipe) id: number,
      @Body() request: FiscaliaDto,
    ): Promise<FiscaliaDto> {
      delete request.id;
      await this.fiscaliaRepository.update(id, { ...request });
      return request;
    }
  
    @Delete(':id')
    async eliminar(@Param('id', ParseIntPipe) id: number) {
      await this.fiscaliaRepository.delete(id);
    }
  }
  

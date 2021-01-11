import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { DatabaseModule } from './modules/database/database.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { createConnectionMp } from './modules/database/f.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FiscaliaModule } from './modules/fiscalia/fiscalia.module';

@Module({
  imports: [FiscaliaModule, 
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule.forRoot()],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) =>
        createConnectionMp(configService),
    }), FiscaliaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

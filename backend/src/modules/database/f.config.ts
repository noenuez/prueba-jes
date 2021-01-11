import { ConfigService } from '@nestjs/config';
import { SqlServerConnectionOptions } from 'typeorm/driver/sqlserver/SqlServerConnectionOptions';
export const createConnectionMp = (configService: ConfigService) => {
  const config: SqlServerConnectionOptions = {
    type: 'mssql',
    host: configService.get('DATABASE_HOST'),
    port: parseInt(configService.get('DATABASE_PORT')),
    username: configService.get('DATABASE_USER'),
    password: configService.get('DATABASE_PASSWORD'),
    database: configService.get('DATABASE_NAME'),
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  };
  return config;
};

import { Injectable } from '@nestjs/common';
import {
  TypeOrmDataSourceFactory,
  TypeOrmModuleOptions,
  TypeOrmOptionsFactory,
} from '@nestjs/typeorm';
import { Usuario } from '../../usuario/entities/usuario.entity';
import { Tema } from '../../tema/entities/tema.entity';
import { Postagem } from '../../postagem/entities/postagem.entity';

@Injectable()
export class DevService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_blogpessoal',
      entities: [Postagem, Tema, Usuario],
      synchronize: true,
    };
  }
}

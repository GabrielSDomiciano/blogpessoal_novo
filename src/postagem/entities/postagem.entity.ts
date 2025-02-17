import { Transform, TransformFnParams } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Tema } from '../../tema/entities/tema.entity';
import { Usuario } from '../../usuario/entities/usuario.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'tb_postagens' }) // CREATE TABLE tb_postagens()
export class Postagem {
  @PrimaryGeneratedColumn() // INT AUTO_INCREMENT PRIMARY KEY
  @ApiProperty()
  id: number;

  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsNotEmpty() // Validação dos dados do objeto
  @Column({ length: 100, nullable: false }) // VARCHAR(100) NOT FULL
  @ApiProperty()
  titulo: string;

  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsNotEmpty() // Validação dos dados do objeto
  @Column({ length: 1000, nullable: false }) // VARCHAR(1000) NOT FULL
  @ApiProperty()
  texto: string;

  @UpdateDateColumn()
  @ApiProperty()
  data: Date;

  @ApiProperty()
  @ManyToOne(() => Tema, (tema) => tema.postagem, {
    onDelete: 'CASCADE',
  })
  tema: Tema;

  @ApiProperty()
  @ManyToOne(() => Usuario, (usuario) => usuario.postagem, {
    onDelete: 'CASCADE',
  })
  usuario: Usuario;
}

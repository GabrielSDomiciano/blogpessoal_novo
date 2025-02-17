import { Transform, TransformFnParams } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Postagem } from '../../postagem/entities/postagem.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'tb_temas' }) // CREATE TABLE tb_temas()
export class Tema {
  @PrimaryGeneratedColumn() // INT AUTO_INCREMENT PRIMARY KEY
  @ApiProperty()
  id: number;

  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsNotEmpty() // Validação dos dados do objeto
  @Column({ length: 1000, nullable: false }) // VARCHAR(1000) NOT FULL
  @ApiProperty()
  descricao: string;

  @ApiProperty()
  @OneToMany(() => Postagem, (postagem) => postagem.tema)
  postagem: Postagem[];
}

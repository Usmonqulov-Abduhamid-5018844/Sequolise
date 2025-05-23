import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { Janor } from './enum';

export class UpdateAuthorDto {
  @ApiProperty({ example: 'Alex' })
  @IsString()
  @IsOptional()
  name: string;

  @ApiProperty({ example: 25 })
  @IsNumber()
  @IsOptional()
  age: number;

  @ApiProperty({ example: 'Parish' })
  @IsString()
  @IsOptional()
  city: string;

  @ApiProperty({ example: 'Dramma', enum: Janor })
  @IsString()
  @IsOptional()
  @IsEnum(Janor)
  janor: Janor;
}

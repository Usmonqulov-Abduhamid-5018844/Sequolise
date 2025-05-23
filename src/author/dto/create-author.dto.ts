import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Janor } from './enum';

export class CreateAuthorDto {
  @ApiProperty({ example: 'Alex' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 25 })
  @IsNumber()
  @IsNotEmpty()
  age: number;

  @ApiProperty({ example: 'Parish' })
  @IsString()
  @IsNotEmpty()
  city: string;

  @ApiProperty({ example: 'Dramma',enum: Janor})
  @IsString()
  @IsNotEmpty()
  @IsEnum(Janor)
  janor: Janor;
}

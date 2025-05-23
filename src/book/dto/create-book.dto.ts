import { ApiProperty } from "@nestjs/swagger"
import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

export class CreateBookDto {
    @ApiProperty({example: "Ikki eshik orasi"})
    @IsString()
    @IsNotEmpty()
    name: string

    @ApiProperty({example: 35000})
    @IsNumber()
    @IsOptional()
    proce: number

    @ApiProperty({example: "data time"})
    @IsString()
    @IsNotEmpty()
    @IsDate()
    date: Date

    @ApiProperty({example: "description"})
    @IsString()
    @IsNotEmpty()
    description: string

    @ApiProperty({example: 2})
    @IsNumber()
    @IsNotEmpty()
    author: string
}

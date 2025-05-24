import { ApiProperty } from "@nestjs/swagger"
import { Type } from "class-transformer"
import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"
export class CreateBookDto {
    @ApiProperty({example: "Ikki eshik orasi"})
    @IsString()
    @IsNotEmpty()
    name: string

    @ApiProperty({example: 35000})
    @IsNumber()
    @IsOptional()
    price: number

    @ApiProperty({example: "2025-05-24T22:34:40"})
    @IsOptional()
    @IsDate()
    @Type(()=> Date)
    date: Date

    @ApiProperty({example: "description"})
    @IsString()
    @IsNotEmpty()
    description: string

    @ApiProperty({example: 1})
    @IsNumber()
    @IsNotEmpty()
    authorId: number
}

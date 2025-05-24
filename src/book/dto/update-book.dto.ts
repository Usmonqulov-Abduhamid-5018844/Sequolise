import { ApiProperty } from "@nestjs/swagger"
import { Type } from "class-transformer"
import { IsDate, IsNumber, IsOptional, IsString } from "class-validator"


export class UpdateBookDto {
    @ApiProperty({example: "Ikki eshik orasi"})
    @IsString()
    @IsOptional()
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
    @IsOptional()
    description: string

    @ApiProperty({example: 1})
    @IsNumber()
    @IsOptional()
    authorId: number
}

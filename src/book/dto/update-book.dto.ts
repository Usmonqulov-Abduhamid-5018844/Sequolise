import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, IsOptional, IsString } from "class-validator"


export class UpdateBookDto {
    @ApiProperty({example: "Ikki eshik orasi"})
    @IsString()
    @IsOptional()
    name: string

    @ApiProperty({example: 35000})
    @IsNumber()
    @IsOptional()
    proce: number

    @ApiProperty({example: "data time"})
    @IsString()
    @IsOptional()
    date: Date

    @ApiProperty({example: "description"})
    @IsString()
    @IsOptional()
    description: string

    @ApiProperty({example: 2})
    @IsNumber()
    @IsOptional()
    author: string
}

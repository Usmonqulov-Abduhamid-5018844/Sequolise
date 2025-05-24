import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Author } from "src/author/model/author.model";

@Table({modelName: "Book"})
export class Book extends Model{
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name: string

    @Column({
        type: DataType.STRING,
        defaultValue: DataType.NOW
    })
    date: string
    
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    price: number

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    description: string

    @ForeignKey(()=> Author)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    authorId: number

    @BelongsTo(()=> Author,{
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    })
    author: Author
}
import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Book } from 'src/book/model/book.model';

@Table({ modelName: 'Author' })
export class Author extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  age: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  city: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  janor: string;

  @HasMany(()=> Book)
  book: Book[]
}

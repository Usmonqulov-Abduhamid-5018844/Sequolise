import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthorModule } from './author/author.module';
import { BookModule } from './book/book.module';
import { Author } from './author/model/author.model';
import { Book } from './book/model/book.model';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: ".env"
  }),
  SequelizeModule.forRoot({
    dialect: "postgres",
    host: process.env.PG_HOST,
    username: process.env.PG_USER,
    password: String(process.env.PG_PASS),
    port: Number(process.env.PG_PORT),
    database: process.env.PG_DB,
    synchronize: true,
    autoLoadModels: true,
    logging: true,
    models: [Author, Book]
  }),
  AuthorModule,
  BookModule
]
})
export class AppModule {}

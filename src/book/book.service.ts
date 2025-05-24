import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Book } from './model/book.model';
import { Author } from 'src/author/model/author.model';

@Injectable()
export class BookService {
  constructor(@InjectModel(Book) private Model: typeof Book){}

  async create(createBookDto: CreateBookDto) {
    try {
      return await this.Model.create({ ...createBookDto });
    } catch (error) {
      return { Message: error.message };
    }
  }

  async findAll() {
    try {
      let data = await this.Model.findAll({include: {model:Author}});
      if (!data.length) {
        return { Message: 'Not fount data' };
      }
      return data;
    } catch (error) {
      return { Message: error.message };
    }
  }

  async findOne(id: number) {
    try {
      let data = await this.Model.findByPk(id,{include: {model: Author}});
      if (!data) {
        return { Message: 'Not fount data by id' };
      }
      return data;
    } catch (error) {
      return { Message: error.message };
    }
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    try {
      let data = await this.Model.findByPk(id);
      if (!data) {
        return { Message: 'Not found by id' };
      }
      return (await this.Model.update(updateBookDto, {
        where: { id },
        returning: true,
      }))[1][0]

    } catch (error) {
      return { Message: error.message };
    }
  }

  async remove(id: number) {
    try {
      let data = await this.Model.findByPk(id);
      if (!data) {
        return { Message: 'Not fount data by id' };
      }
     await this.Model.destroy({ where: { id } })

      return { Message: 'Deleted' };
    } catch (error) {
      return { Message: error.message };
    }
  }
}

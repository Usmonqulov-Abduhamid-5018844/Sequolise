import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Author } from './model/author.model';
import { Book } from 'src/book/model/book.model';

@Injectable()
export class AuthorService {
  constructor(@InjectModel(Author) private Model: typeof Author) {}

  async create(createAuthorDto: CreateAuthorDto) {
    try {
      return await this.Model.create({ ...createAuthorDto });
    } catch (error) {
      return { Message: error.message };
    }
  }

  async findAll() {
    try {
      let data = await this.Model.findAll({ include: { model: Book } });
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
      let data = await this.Model.findByPk(id, { include: { model: Book } });
      if (!data) {
        return { Message: 'Not fount data by id' };
      }
      return data;
    } catch (error) {
      return { Message: error.message };
    }
  }

  async update(id: number, updateAuthorDto: UpdateAuthorDto) {
    try {
      let data = await this.Model.findByPk(id);
      if (!data) {
        return { Message: 'Not found by id' };
      }
      return (
        await this.Model.update(updateAuthorDto, {
          where: { id },
          returning: true,
        })
      )[1][0];
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
      await this.Model.destroy({ where: { id } });

      return { Message: 'Deleted' };
    } catch (error) {
      return { Message: error.message };
    }
  }
}

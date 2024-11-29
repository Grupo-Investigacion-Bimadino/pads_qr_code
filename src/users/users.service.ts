import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from './schemas/users.schemas';

@Injectable()
export class UsersService {
  constructor(@InjectModel(Users.name) private usersModel: Model<Users>) {}

  create(CreateUsersDto: CreateUserDto) {
    const createdUsers = new this.usersModel(CreateUsersDto);
    return createdUsers.save();
  }

  findAll() {
    return this.usersModel.find().exec();
  }

  findOne(id: string) {
    return this.usersModel.findById(id).exec();
  }

  update(id: string, UpdateUsersDto: UpdateUserDto) {
    return this.usersModel
      .findByIdAndUpdate(id, UpdateUsersDto, {
        new: true,
      })
      .exec();
  }

  remove(id: string) {
    return this.usersModel.findByIdAndDelete(id).exec();
  }
}

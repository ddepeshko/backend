import { Injectable } from "@nestjs/common";
import { User } from "../models/users.model";
import { InjectModel } from "@nestjs/sequelize";
import { CreateUserDto } from "../dto/users/create-user.dto";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async createUser(dto: CreateUserDto): Promise<User> {
    const user = await this.userRepository.create(dto);
    return user;
  }
  async getAllUsers(): Promise<Array<User>> {
    const users = await this.userRepository.findAll();
    return users;
  }
}

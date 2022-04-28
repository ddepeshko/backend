import { Injectable } from "@nestjs/common";
import { User } from "../models/users.model";
import { InjectModel } from "@nestjs/sequelize";
import { CreateUserDto } from "../dto/users/create-user.dto";
import { RolesService } from "./roles.service";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User, private roleService: RolesService) {}

  async createUser(dto: CreateUserDto): Promise<User> {
    const user = await this.userRepository.create(dto);
    const role = await this.roleService.geRoleByValue("USER");
    await user.$set("roles", [role.id]);
    return user;
  }
  async getAllUsers(): Promise<Array<User>> {
    const users = await this.userRepository.findAll({ include: { all: true } });
    return users;
  }
}

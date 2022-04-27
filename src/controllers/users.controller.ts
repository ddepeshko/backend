import { Body, Get, Post } from "@nestjs/common";
import { Controller } from "@nestjs/common";
import { UsersService } from "../services/users.service";
import { CreateUserDto } from "../dto/users/create-user.dto";
import { User } from "../models/users.model";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags("Users")
@Controller("/api")
export class UsersController {
  constructor(private usersService: UsersService) {}
  @ApiOperation({ summary: "Створення користувача" })
  @ApiResponse({ status: 200, type: User })
  @Post("/users")
  create(@Body() userDto: CreateUserDto): Promise<User> {
    return this.usersService.createUser(userDto);
  }
  @ApiOperation({ summary: "Отримання всіх користувачів" })
  @ApiResponse({ status: 200, type: [User] })
  @Get("/users")
  getAllUsers(): Promise<Array<User>> {
    return this.usersService.getAllUsers();
  }
}

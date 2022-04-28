import { Module } from "@nestjs/common";
import { UsersController } from "../controllers/users.controller";
import { UsersService } from "../services/users.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "../models/users.model";
import { Role } from "../models/roles.model";
import { UserRoles } from "../models/user-roles.model";
import { RolesModule } from "./roles.module";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [SequelizeModule.forFeature([User, Role, UserRoles]), RolesModule],
})
export class UsersModule {}

import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Role } from "../models/roles.model";
import { CreateRoleDto } from "../dto/roles/create-role.dto";

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role) private rolesRepository: typeof Role) {}

  async createRole(dto: CreateRoleDto): Promise<Role> {
    const role = await this.rolesRepository.create(dto);
    return role;
  }

  async geRoleByValue(value: string): Promise<Role> {
    const role = await this.rolesRepository.findOne({ where: { value } });
    return role;
  }
}

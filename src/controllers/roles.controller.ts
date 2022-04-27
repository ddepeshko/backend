import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { RolesService } from "../services/roles.service";
import { CreateRoleDto } from "../dto/roles/create-role.dto";

@ApiTags("Roles")
@Controller("/api")
export class RolesController {
  constructor(private rolesService: RolesService) {}

  @Post("/roles")
  create(@Body() dto: CreateRoleDto) {
    return this.rolesService.createRole(dto);
  }
  @Get("/roles/:value")
  getByValue(@Param("value") value: string) {
    return this.rolesService.geRoleByValue(value);
  }
}

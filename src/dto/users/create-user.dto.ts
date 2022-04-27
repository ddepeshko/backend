import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({ example: "some@mail.com", description: "Емаіл обовязкове поле" })
  readonly email: string;
  @ApiProperty({ example: "somePass12", description: "Емаіл обовязкове поле пароля" })
  readonly password: string;
}

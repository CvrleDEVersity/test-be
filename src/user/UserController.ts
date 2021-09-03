import {
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete,
  JsonController,
  Authorized,
} from "routing-controllers";
import { UserDTO } from "../dto/User.dto";
import { AddressDTO } from "../dto/Address.dto";
import { CompanyDTO } from "../dto/Company.dto";
import { PostDTO } from "../dto/Posts.dto";
import Container, { Service } from "typedi";
import UserService from "./UserService";

@JsonController()
@Service({ global: true })
export default class UserController {
  constructor(public userService: UserService) {}
  @Get("/users")
  async getAll() {
    return this.userService.findAll();
  }
  @Authorized()
  @Get("/users/:id")
  getOne(@Param("id") id: number) {
    return this.userService.findById(id);
  }

  @Post("/users")
  async post(
    @Body({ options: { limit: "250mb" } })
    users: UserDTO<PostDTO, CompanyDTO, AddressDTO>[]
  ) {
    await this.userService.saveUsers(users);

    return { status: 201, message: "Users Saved Successfully!" };
  }

  @Put("/users/:id")
  put(@Param("id") id: number, @Body() user: any) {
    return "Updating a user...";
  }

  @Delete("/users/:id")
  remove(@Param("id") id: number) {
    return "Removing user...";
  }
}

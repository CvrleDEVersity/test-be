import { Body, Post, JsonController } from "routing-controllers";
import { UserRepository } from "../user/UserRepository";
import * as jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import { Service } from "typedi";

dotenv.config();
@JsonController()
@Service()
export class AuthControler {
  private userRepo: UserRepository = new UserRepository();
  @Post("/login")
  async login(@Body() params: any) {
    const user = await this.userRepo.findByPhone(params.phone);
    const secret = process.env.SECRET as string;
    const token = jwt.sign({ phone: user.phone }, secret);
    user.token = token;
    return user;
  }

  @Post("/register")
  register(@Body() params: any) {
    return "Moze";
  }
}

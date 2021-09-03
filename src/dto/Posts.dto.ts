import { IsNumber, IsString } from "class-validator";

export class PostDTO {
  @IsString()
  title?: string;

  @IsString()
  body?: string;

  user: any;
}

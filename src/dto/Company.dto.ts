import { IsNumber, IsString } from "class-validator";

export class CompanyDTO {
  @IsString()
  bs?: string;

  @IsString()
  catchPhrase?: string;

  @IsString()
  name?: string;
}

import { IsNumber, IsString } from "class-validator";

export class AddressDTO {
  @IsString()
  street?: string;

  @IsString()
  suite?: string;

  @IsString()
  city?: string;

  @IsString()
  zipcode?: string;
}

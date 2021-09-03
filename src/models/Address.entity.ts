import { IsNumber, IsString } from "class-validator";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Address extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "index" })
  @IsNumber()
  id?: number;

  @Column({ nullable: true })
  @IsString()
  street?: string;

  @Column({ nullable: true })
  @IsString()
  suite?: string;

  @Column({ nullable: true })
  @IsString()
  city?: string;

  @Column({ nullable: true })
  @IsString()
  zipcode?: string;
}

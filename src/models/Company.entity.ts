import { IsNumber, IsString } from "class-validator";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Company extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "index" })
  @IsString()
  id?: string;

  @Column({ nullable: true })
  @IsString()
  bs?: string;

  @Column({ nullable: true })
  @IsString()
  catchPhrase?: string;

  @Column({ nullable: true })
  @IsString()
  name?: string;
}

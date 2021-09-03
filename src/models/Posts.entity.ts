import { IsNumber, IsString } from "class-validator";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User.entity";

@Entity()
export class Posts extends BaseEntity {
  @IsNumber()
  @PrimaryGeneratedColumn({ name: "index" })
  id?: number;
  @Column({ nullable: true })
  @IsString()
  title?: string;

  @Column({ nullable: true })
  @IsString()
  body?: string;

  @ManyToOne(() => User, (user) => user.post)
  user?: User;
}

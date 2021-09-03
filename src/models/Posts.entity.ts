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
  @PrimaryGeneratedColumn({ name: "index" })
  id?: number;
  @Column({ nullable: true })
  title?: string;
  @Column({ nullable: true })
  body?: string;
  @ManyToOne(() => User, (user) => user.post)
  user?: User;
}

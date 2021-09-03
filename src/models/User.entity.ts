import { IsNumber, IsString } from "class-validator";
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Address } from "./Address.entity";
import { Company } from "./Company.entity";
import { Posts } from "./Posts.entity";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "index" })
  @IsNumber()
  id?: number;

  @Column({ nullable: true })
  @IsString()
  name?: string;

  @Column({ nullable: true })
  @IsString()
  website?: string;

  @Column({ nullable: true })
  @IsString()
  image?: string;

  @Column({ nullable: true })
  @IsString()
  phone?: string;

  @Column({ nullable: true })
  @IsString()
  username?: string;

  @OneToMany(() => Posts, (post) => post.user)
  post?: Posts[];

  @OneToOne(() => Company)
  @JoinColumn()
  company!: Company;

  @OneToOne(() => Address)
  @JoinColumn()
  address?: Address;
}

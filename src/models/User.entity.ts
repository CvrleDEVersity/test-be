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
  id?: number;
  @Column({ nullable: true })
  name?: string;
  @Column({ nullable: true })
  website?: string;
  @Column({ nullable: true })
  image?: string;
  @Column({ nullable: true })
  phone?: string;
  @Column({ nullable: true })
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

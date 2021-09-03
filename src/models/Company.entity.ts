import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Company extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "index" })
  id?: number;
  @Column({ nullable: true })
  bs?: string;
  @Column({ nullable: true })
  catchPhrase?: string;
  @Column({ nullable: true })
  name?: string;
}

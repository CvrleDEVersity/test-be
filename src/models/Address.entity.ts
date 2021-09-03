import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Address extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "index" })
  id?: number;
  @Column({ nullable: true })
  street?: string;
  @Column({ nullable: true })
  suite?: string;
  @Column({ nullable: true })
  city?: string;
  @Column({ nullable: true })
  zipcode?: string;
}

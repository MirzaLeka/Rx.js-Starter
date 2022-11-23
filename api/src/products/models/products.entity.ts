import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm';

@Entity()
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  dateCreated: string;

  @Column({ nullable: true })
  image: string;

  @BeforeInsert()
  setProductDate() {
    this.dateCreated = new Date().toDateString();
  }
}

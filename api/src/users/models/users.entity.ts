import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  dateCreated: string;

  @Column({
    default:
      'https://www.littlethings.info/wp-content/uploads/2014/04/dummy-image-green-e1398449160839.jpg',
  })
  profilePicture: string;

  @Column({ select: false, nullable: true })
  originalProfilePicture: string;

  @Column({ select: false, nullable: true })
  resizedProfilePicture: string;

  @BeforeInsert()
  setProductDate() {
    this.dateCreated = new Date().toDateString();
  }
}

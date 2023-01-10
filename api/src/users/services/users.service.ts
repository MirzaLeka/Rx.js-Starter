import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { catchError, from, NotFoundError, of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Repository } from 'typeorm';
import { UserEntity } from '../models/users.entity';
import { CreateUserDTO, UserDTO } from '../models/users.model';
import { IUsersService } from './iusers.service';

@Injectable()
export class UsersService implements IUsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,
  ) {}

  createUser({ name, profilePicture }: CreateUserDTO): Observable<UserDTO> {
    const user = new UserEntity();
    user.name = name;

    if (profilePicture) {
      user.profilePicture = profilePicture;
    }

    return from(this.usersRepository.save(user)).pipe(
      catchError((err) => {
        throw new BadRequestException(err);
      }),
    );
  }

  getUsers(): Observable<UserDTO[]> {
    return from(this.usersRepository.find()).pipe(catchError((err) => of(err)));
  }

  async updateUser(userData: CreateUserDTO, id: number): Promise<any> {
    const user = await this.usersRepository.findOne({
      where: { id },
    });

    console.log('userData :>> ', userData);

    console.log('user :>> ', user);

    if (!user) {
      throw new NotFoundException();
    }

    // TODO fix this pls

    if (userData.profilePicture) {
      user.profilePicture = userData.profilePicture;
    }

    if (userData.originalProfilePicture) {
      user.originalProfilePicture = userData.originalProfilePicture;
    }

    if (userData.resizedProfilePicture) {
      user.resizedProfilePicture = userData.resizedProfilePicture;
    }

    return this.usersRepository.save(user);

    // return this.usersRepository.update(2, user);
  }
}

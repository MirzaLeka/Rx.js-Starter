import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { catchError, from, of } from 'rxjs';
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

  updateUser(userData: CreateUserDTO): Observable<UserDTO> {
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
}

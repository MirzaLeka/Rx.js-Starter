import { Observable } from 'rxjs';
import { CreateUserDTO, UserDTO } from '../models/users.model';

export interface IUsersService {
  createUser(userData: CreateUserDTO): Observable<UserDTO>;

  getUsers(): Observable<UserDTO[]>;

  // updateUser(userData: CreateUserDTO, userId: number): Observable<UserDTO>;
}

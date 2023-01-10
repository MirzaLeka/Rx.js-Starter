import { Observable } from 'rxjs';
import { CreateUserDTO, UserDTO } from '../models/users.model';

export interface IUsersService {
  createUser(user: CreateUserDTO): Observable<UserDTO>;

  getUsers(): Observable<UserDTO[]>;

  updateUser(user: CreateUserDTO): Observable<UserDTO>;
}

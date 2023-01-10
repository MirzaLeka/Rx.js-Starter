import { Body, Controller, Post, Get, Put } from '@nestjs/common';
import { Observable } from 'rxjs/internal/Observable';
import { CreateUserDTO, UserDTO } from '../models/users.model';
import { UsersService } from '../services/users.service';

@Controller('/api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  CreateUser(@Body() user: CreateUserDTO): Observable<UserDTO> {
    return this.usersService.createUser(user);
  }

  @Get()
  GetUsers(): Observable<UserDTO[]> {
    return this.usersService.getUsers();
  }

  @Put()
  UpdateUser(@Body() user: CreateUserDTO): Observable<UserDTO> {
    return this.usersService.updateUser(user)
  }

  // update
}

import { Body, Controller, Post, Get, Patch, Param } from '@nestjs/common';
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

  // @Patch(':id')
  // UpdateUser(@Body() user: CreateUserDTO, @Param() id: number): Observable<UserDTO> {
  //   return this.usersService.updateUser(user, id)
  // }


  @Patch(':id')
  UpdateUser(@Body() user: CreateUserDTO, @Param() id: string): Promise<UserDTO> {
    return this.usersService.updateUser(user, 2)
  }

}

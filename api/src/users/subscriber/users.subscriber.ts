import {
  EntitySubscriberInterface,
  EventSubscriber,
  UpdateEvent,
} from 'typeorm';
import { UserEntity } from '../models/users.entity';

// https://medium.com/@Semyonic/subscribers-a-k-a-entity-listeners-of-typeorm-on-nestjs-a97ac75acc2d

@EventSubscriber()
export class UsersSubscriber implements EntitySubscriberInterface<UserEntity> {
  listenTo() {
    return UserEntity;
  }

  // afterInsert(event: InsertEvent<UserEntity>): void | Promise<any> {
  //   console.log('after insert event :>> ', event);
  // }

  beforeUpdate(event: UpdateEvent<UserEntity>): void | Promise<any> {
    console.log('before event.updatedColumns :>> ', event.updatedColumns);
    // console.log('after update event :>> ', event);
    // event.entity.originalProfilePicture = '213';
  }

  afterUpdate(event: UpdateEvent<UserEntity>): void | Promise<any> {
    console.log('after event.updatedColumns :>> ', event.updatedColumns);
    // console.log('after update event :>> ', event);
    // event.entity.originalProfilePicture = '213';
  }

  // afterDelete
  // remove all other pictures
  // check what happens to default value when you remove image
}

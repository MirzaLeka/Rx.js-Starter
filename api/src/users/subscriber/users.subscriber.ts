import {
  EntitySubscriberInterface,
  EventSubscriber,
  UpdateEvent,
} from 'typeorm';
import { UserEntity } from '../models/users.entity';

@EventSubscriber()
export class UsersSubscriber implements EntitySubscriberInterface<UserEntity> {
  listenTo() {
    return UserEntity;
  }

  // afterInsert(event: InsertEvent<UserEntity>): void | Promise<any> {
  //   console.log('after insert event :>> ', event);
  // }

  // TODO create route
  afterUpdate(event: UpdateEvent<UserEntity>): void | Promise<any> {
    console.log('event.updatedColumns :>> ', event.updatedColumns);
    // console.log('after update event :>> ', event);
    // event.entity.originalProfilePicture = '213';
  }

  // afterDelete
  // remove all other pictures
  // check what happens to default value when you remove image
}

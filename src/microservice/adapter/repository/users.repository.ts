import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../../domain/schemas/users.schema';
import { GenericRepository } from '@devseeder/nestjs-microservices-commons';

@Injectable()
export class UsersRepository extends GenericRepository<User> {
  constructor(
    @InjectModel(User.name)
    model: Model<UserDocument>
  ) {
    super(model);
  }
}

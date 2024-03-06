/* eslint-disable @typescript-eslint/no-unused-vars */
import { AbstractSchema } from '@devseeder/nestjs-microservices-commons/dist/schema/abstract.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { DependencyEntityTokens } from 'src/microservice/application/app.constants';

export type TravelDocument = Travel & Document;

@Schema({ timestamps: true, collection: DependencyEntityTokens.TRAVEL })
export class Travel extends AbstractSchema {
  @Prop({ required: true })
  name: string;

  @Prop({ required: false })
  description: string;

  @Prop({ required: false })
  startDate: Date;

  @Prop({ required: false })
  endDate: Date;

  @Prop({ required: true, type: Object })
  places: TravelPlace[];

  @Prop({ required: true })
  userId: string;
}

export interface TravelPlace {
  _id: string;
  name: string;
  type: string;
  arriveDate: Date;
  destinyPlace?: boolean;
  mainTravelPlace?: boolean;
}

const schema = SchemaFactory.createForClass(Travel);
export const TravelSchema = schema;

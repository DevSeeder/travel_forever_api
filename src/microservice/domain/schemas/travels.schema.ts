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

  @Prop({ required: true })
  startDate: Date;

  @Prop({ required: false })
  endDate: Date;

  @Prop({ required: true, type: Object })
  places: TravelPlace[];
}

export interface TravelPlace {
  _id: string;
  type: string;
  sequence: number;
  date: Date;
}

const schema = SchemaFactory.createForClass(Travel);
export const TravelSchema = schema;

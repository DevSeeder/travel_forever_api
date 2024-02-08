/* eslint-disable @typescript-eslint/no-unused-vars */
import { AbstractSchema } from '@devseeder/nestjs-microservices-commons/dist/schema/abstract.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { DependencyEntityTokens } from 'src/microservice/application/app.constants';

export type ActivityDocument = Activity & Document;

@Schema({ timestamps: true, collection: DependencyEntityTokens.ACTIVITY })
export class Activity extends AbstractSchema {
  @Prop({ required: true })
  name: string;

  @Prop({ required: false })
  description: string;

  @Prop({ required: true })
  startDate: Date;

  @Prop({ required: false })
  endDate: Date;

  @Prop({ required: true })
  travelId: string;

  @Prop({ required: false })
  link: string;

  @Prop({ required: false })
  company: string;
}

const schema = SchemaFactory.createForClass(Activity);
export const ActivitySchema = schema;

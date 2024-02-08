/* eslint-disable @typescript-eslint/no-unused-vars */
import { AbstractSchema } from '@devseeder/nestjs-microservices-commons/dist/schema/abstract.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { DependencyEntityTokens } from 'src/microservice/application/app.constants';

export type StepDocument = Step & Document;

@Schema({ timestamps: true, collection: DependencyEntityTokens.STEP })
export class Step extends AbstractSchema {
  @Prop({ required: true })
  name: string;

  @Prop({ required: false })
  description: string;

  @Prop({ required: true })
  categoryId: string;

  @Prop({ required: true })
  startDate: Date;

  @Prop({ required: false })
  endDate: Date;

  @Prop({ required: true })
  activityId: string;

  @Prop({ required: false })
  transportMode: string;
}

const schema = SchemaFactory.createForClass(Step);
export const StepSchema = schema;

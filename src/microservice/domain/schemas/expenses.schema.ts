/* eslint-disable @typescript-eslint/no-unused-vars */
import { AbstractSchema } from '@devseeder/nestjs-microservices-commons/dist/schema/abstract.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { DependencyEntityTokens } from 'src/microservice/application/app.constants';

export type ExpenseDocument = Expense & Document;

@Schema({ timestamps: true, collection: DependencyEntityTokens.EXPENSE })
export class Expense extends AbstractSchema {
  @Prop({ required: true })
  name: string;

  @Prop({ required: false })
  description: string;

  @Prop({ required: true })
  categoryId: string;

  @Prop({ required: true })
  cost: number;

  @Prop({ required: false })
  currency: string;

  @Prop({ required: false })
  payedValue: number;

  @Prop({ required: false })
  date: Date;

  @Prop({ required: false })
  paymentDate: Date;

  @Prop({ required: false, default: false })
  refundable: boolean;

  @Prop({ required: false })
  refundableValue: number;

  @Prop({ required: false })
  link: string;

  @Prop({ required: false })
  company: string;

  @Prop({ required: false })
  files: string[];

  @Prop({ required: false })
  stepId: string;

  @Prop({ required: true })
  travelId: string;
}

const schema = SchemaFactory.createForClass(Expense);
export const ExpensesSchema = schema;

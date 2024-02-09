/* eslint-disable @typescript-eslint/no-unused-vars */
import { AbstractDomain } from '@devseeder/nestjs-microservices-commons';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { DependencyEntityTokens } from 'src/microservice/application/app.constants';
export type CurrencyDocument = Currency & Document;

@Schema({
  timestamps: true,
  collection: DependencyEntityTokens.CURRENCY
})
export class Currency extends AbstractDomain {
  @Prop({ required: true })
  code: string;

  @Prop({ required: true })
  symbol: string;

  @Prop({ required: false })
  convert: ExchangeValue[];
}

export interface ExchangeValue {
  reference: string;
  value: number;
}

const schema = SchemaFactory.createForClass(Currency);
schema.index({ name: 1 }, { unique: true });
schema.index({ key: 1 }, { unique: true });

export const CurrencysSchema = schema;

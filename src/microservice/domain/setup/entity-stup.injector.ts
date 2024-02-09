import {
  ExpenseCategory,
  ExpenseCategoriesSchema
} from '../schemas/expense-categories.schema';
import { Expense, ExpensesSchema } from '../schemas/expenses.schema';
import { User, UsersSchema } from '../schemas/users.schema';
import { DependencyEntityTokens } from 'src/microservice/application/app.constants';
import { ModelEntityTokens } from '@devseeder/nestjs-microservices-commons';
import { ClientAuthService } from '@devseeder/nestjs-microservices-core';
import { CreateUserService } from 'src/microservice/application/service/users/create-user.service';
import {
  StepCategoriesSchema,
  StepCategory
} from '../schemas/step-categories.schema';
import { Travel, TravelSchema } from '../schemas/travels.schema';
import { Activity, ActivitySchema } from '../schemas/activities.schema';
import { Step, StepSchema } from '../schemas/steps.schema';
import {
  TransportMode,
  TransportModesSchema
} from '../schemas/transport-modes.schema';
import { Currency, CurrencysSchema } from '../schemas/currencies.schema';

export const EntitySetupConfig: ModelEntityTokens = {
  transportModes: {
    modelName: TransportMode.name,
    schema: TransportModesSchema,
    collection: DependencyEntityTokens.TRANSPORT_MODE
  },
  stepCategories: {
    modelName: StepCategory.name,
    schema: StepCategoriesSchema,
    collection: DependencyEntityTokens.STEP_CATEGORY
  },
  expenseCategories: {
    modelName: ExpenseCategory.name,
    schema: ExpenseCategoriesSchema,
    collection: DependencyEntityTokens.EXPENSE_CATEGORY
  },
  expenses: {
    modelName: Expense.name,
    schema: ExpensesSchema,
    collection: DependencyEntityTokens.EXPENSE
  },
  currencies: {
    modelName: Currency.name,
    schema: CurrencysSchema,
    collection: DependencyEntityTokens.CURRENCY
  },
  steps: {
    modelName: Step.name,
    schema: StepSchema,
    collection: DependencyEntityTokens.STEP
  },
  activities: {
    modelName: Activity.name,
    schema: ActivitySchema,
    collection: DependencyEntityTokens.ACTIVITY
  },
  travels: {
    modelName: Travel.name,
    schema: TravelSchema,
    collection: DependencyEntityTokens.TRAVEL
  },
  users: {
    modelName: User.name,
    schema: UsersSchema,
    collection: DependencyEntityTokens.USER,
    customProvider: {
      create: {
        className: CreateUserService,
        injectArgs: [ClientAuthService.name]
      }
    }
  }
};

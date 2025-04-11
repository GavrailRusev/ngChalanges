import { InjectionToken } from '@angular/core';
import { CrudForCard } from './crud.interface';
import { CardTypes } from './card-factory';

export const CardToken = new InjectionToken<CrudForCard<CardTypes>>('CartToken');

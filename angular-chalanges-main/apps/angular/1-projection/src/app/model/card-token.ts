import { InjectionToken } from '@angular/core';
import { CrudForCard } from './crud.interface';

export const CardToken = new InjectionToken<CrudForCard<any>>('CartToken');

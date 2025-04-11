import { Injectable, signal } from '@angular/core';

import { City } from '../model/city.model';
import { CrudForCard } from '../model/crud.interface';
import { randomCity } from './fake-http.service';

@Injectable({
  providedIn: 'root',
})
export class CityStore implements CrudForCard<City> {
  public cities = signal<City[]>([]);
  public randData = randomCity;
  addAll(cities: City[]) {
    this.cities.set(cities);
  }

  addOne(city: City) {
    this.cities.set([...this.cities(), city]);
  }

  deleteOne(id: number) {
    this.cities.set(this.cities().filter((s) => s.id !== id));
  }
}

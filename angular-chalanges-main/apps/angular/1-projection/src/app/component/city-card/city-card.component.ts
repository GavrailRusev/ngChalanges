import { ChangeDetectionStrategy, Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { CityStore } from '../../data-access/city.store';
import { FakeHttpService } from '../../data-access/fake-http.service';
import { CardToken } from '../../model/card-token';
import { CardType } from '../../model/card.model';
import { RowContentDirective } from '../../model/row-content.directive';
import { CardComponent } from '../../ui/card/card.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-city-card',
  template: `
    <app-card [list]="cities()" >
    <img imgCard ngSrc="assets/img/city.png" width="200" height="200" />
      <ng-template [appRowContent]="cities()" let-row>
        {{ row.name }}
      </ng-template>
    </app-card>
  `,
   
   styles: [
    `
    
  
     :host{
      --light-bg: rgba(224, 77, 77, 0.4);
    }
   
    `,
  ],
  imports: [CardComponent, RowContentDirective,NgOptimizedImage],
  providers: [{ provide: CardToken, useExisting: CityStore }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityCardComponent implements OnInit {
  private http = inject(FakeHttpService);
  private store = inject(CityStore);

  cities = this.store.cities;
 

  ngOnInit(): void {
    this.http.fetchCities$.subscribe((s) => this.store.addAll(s));
  }
}

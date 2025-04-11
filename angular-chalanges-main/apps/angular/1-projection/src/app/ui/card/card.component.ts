import { City } from './../../model/city.model';
import { NgOptimizedImage, NgTemplateOutlet } from '@angular/common';
import {
  Component,
  ContentChild,
  inject,
  Inject,
  input,
  signal,
  TemplateRef,
} from '@angular/core';
import { CardTypes } from '../../model/card-factory';
import { CardToken } from '../../model/card-token';
import { CardType } from '../../model/card.model';
import { CrudForCard } from '../../model/crud.interface';
import { RowContentDirective } from '../../model/row-content.directive';
import { ListItemComponent } from '../list-item/list-item.component';

@Component({
  selector: 'app-card',
  template: `
    <div
      class="flex w-fit flex-col gap-3 rounded-md border-2 border-black p-4"
      [class]="'bg-light'">
      
    
      
      <ng-content select="[imgCard]"></ng-content>  
      <section>
        @for (item of this.list(); let i = $index; track item) {
          <app-list-item [item]="item" >
            <ng-container
              [ngTemplateOutlet]="rowContent"
              [ngTemplateOutletContext]="{
                $implicit:this.dir?.data?.[i] ?? ''
              }"></ng-container>
          </app-list-item>
        }
      </section>

      <button
        class="rounded-sm border border-blue-500 bg-blue-300 p-2"
        (click)="addNewItem()">
        Add
      </button>
    </div>
  `,
   styles: [
    `    
    .bg-light {
      background-color: var(--light-bg, rgba(250, 0, 0, 0.1));
    }
  `
],
  imports: [ListItemComponent, NgTemplateOutlet],
})
export class CardComponent {
  readonly list = input<CardTypes[]>([]);

  
  @ContentChild(RowContentDirective) dir: RowContentDirective<CardTypes> | undefined = undefined;
  @ContentChild(RowContentDirective, { read: TemplateRef })
  rowContent: TemplateRef<any> | null = null;
  cardToken = inject(CardToken)
  

  addNewItem() {
    this.cardToken.addOne(this.cardToken.randData());
  }
}

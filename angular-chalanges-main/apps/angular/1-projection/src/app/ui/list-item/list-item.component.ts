import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Inject,
  input,
} from '@angular/core';
import { CardToken } from '../../model/card-token';
import { CardType } from '../../model/card.model';
import { CrudForCard } from '../../model/crud.interface';

@Component({
  selector: 'app-list-item',
  template: `
    <div class="border-grey-300 flex justify-between border px-2 py-1">
      <ng-content></ng-content>

      <button (click)="delete(item().id)">
        <img class="h-5" src="assets/svg/trash.svg" />
      </button>
    </div>
  `,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListItemComponent {
  readonly item = input.required<any>();
  cardToken = inject(CardToken)
  

  delete(id: number) {
    this.cardToken.deleteOne(id)
  }
}

import { NgOptimizedImage, NgTemplateOutlet } from '@angular/common';
import {
  Component,
  ContentChild,
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
      [class]="customClass()">
      @if (type() === CardType.TEACHER) {
        <img ngSrc="assets/img/teacher.png" width="200" height="200" />
      }
      @if (type() === CardType.STUDENT) {
        <img ngSrc="assets/img/student.webp" width="200" height="200" />
      }

      <section>
        @for (item of this.list(); let i = $index; track item) {
          <app-list-item [item]="item" [type]="type()">
            <ng-container
              [ngTemplateOutlet]="rowContent"
              [ngTemplateOutletContext]="{
                $implicit: this.dir?.data[i]
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
  imports: [ListItemComponent, NgOptimizedImage, NgTemplateOutlet],
})
export class CardComponent {
  readonly list = input<CardTypes[]>([]);
  finalCard = signal<CardTypes[]>([]);
  readonly type = input.required<CardType>();
  readonly customClass = input('');
  CardType = CardType;
  @ContentChild(RowContentDirective) dir: any;
  @ContentChild(RowContentDirective, { read: TemplateRef })
  rowContent: TemplateRef<any> | null = null;

  constructor(@Inject(CardToken) private cardToken: CrudForCard<CardTypes>) {}

  addNewItem() {
    this.cardToken.addOne(this.cardToken.randData());
  }
}

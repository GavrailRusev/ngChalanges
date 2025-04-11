import { Component, inject, OnInit } from '@angular/core';
import { FakeHttpService } from '../../data-access/fake-http.service';
import { TeacherStore } from '../../data-access/teacher.store';
import { CardToken } from '../../model/card-token';
import { CardType } from '../../model/card.model';
import { RowContentDirective } from '../../model/row-content.directive';
import { CardComponent } from '../../ui/card/card.component';

@Component({
  selector: 'app-teacher-card',
  template: `
    <app-card [list]="teachers()" [type]="cardType" customClass="bg-light-red">
      <ng-template [appRowContent]="teachers()" let-row>
        {{ row.firstName }}
      </ng-template>
    </app-card>
  `,
  styles: [
    `
      ::ng-deep .bg-light-red {
        background-color: rgba(250, 0, 0, 0.1);
      }
    `,
  ],
  providers: [{ provide: CardToken, useExisting: TeacherStore }],
  imports: [CardComponent, RowContentDirective],
})
export class TeacherCardComponent implements OnInit {
  private http = inject(FakeHttpService);
  private store = inject(TeacherStore);

  teachers = this.store.teachers;
  cardType = CardType.TEACHER;

  ngOnInit(): void {
    this.http.fetchTeachers$.subscribe((t) => this.store.addAll(t));
  }
}

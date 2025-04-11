import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { FakeHttpService } from '../../data-access/fake-http.service';
import { StudentStore } from '../../data-access/student.store';
import { CardToken } from '../../model/card-token';
import { CardType } from '../../model/card.model';
import { RowContentDirective } from '../../model/row-content.directive';
import { CardComponent } from '../../ui/card/card.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-student-card',
  template: `
    <app-card
      [list]="students()"
      >
      <img imgCard ngSrc="assets/img/student.webp" width="200" height="200" />
      
      <ng-template [appRowContent]="students()" let-row>
        {{ row.firstName }}
      </ng-template>
    </app-card>
  `,
  styles: [
    `
    :host{
      --light-bg: rgba(0, 250, 0, 0.1);
    }
    
    `,
  ],
  imports: [CardComponent, RowContentDirective,NgOptimizedImage],
  providers: [{ provide: CardToken, useExisting: StudentStore }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentCardComponent implements OnInit {
  private http = inject(FakeHttpService);
  private store = inject(StudentStore);
  students = this.store.students;


  ngOnInit(): void {
    this.http.fetchStudents$.subscribe((s) => {
      this.store.addAll(s);
    });
  }
}

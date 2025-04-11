import { Component, inject, OnInit } from '@angular/core';
import { FakeHttpService } from '../../data-access/fake-http.service';
import { TeacherStore } from '../../data-access/teacher.store';
import { CardToken } from '../../model/card-token';
import { CardType } from '../../model/card.model';
import { RowContentDirective } from '../../model/row-content.directive';
import { CardComponent } from '../../ui/card/card.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-teacher-card',
  template: `
    <app-card [list]="teachers()" >
    <img imgCard ngSrc="assets/img/teacher.png" width="200" height="200" />
      <ng-template [appRowContent]="teachers()" let-row>
        {{ row.firstName }}
      </ng-template>
    </app-card>
  `,
  styles: [
    `
    :host{
      --light-red-bg: rgba(250, 0, 0, 0.1);
    }
    

    `,
  ],
  providers: [{ provide: CardToken, useExisting: TeacherStore }],
  imports: [CardComponent, RowContentDirective,NgOptimizedImage],
})
export class TeacherCardComponent implements OnInit {
  private http = inject(FakeHttpService);
  private store = inject(TeacherStore);

  teachers = this.store.teachers;
  

  ngOnInit(): void {
    this.http.fetchTeachers$.subscribe((t) => this.store.addAll(t));
  }
}

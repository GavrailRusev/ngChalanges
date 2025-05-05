import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgForDirective } from './ng-for.directive';

interface Person {
  name: string;
}

@Component({
  imports: [NgFor, NgIf, NgForDirective],
  selector: 'app-root',
  template: `
    <div *ngFor="let person of persons; test: emptyList">
      {{ person }}
    </div>

    <ng-template #emptyList>The list is empty !!</ng-template>
    <button (click)="clear()">Clear</button>
    <button (click)="add()">Add</button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  persons?: string[] = undefined;

  clear() {
    this.persons = [];
  }
  add() {
    if (!this.persons) this.persons = [];
    this.persons?.push('tutu');
  }
}

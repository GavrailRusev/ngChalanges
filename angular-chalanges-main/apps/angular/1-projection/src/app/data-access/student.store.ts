import { Injectable, signal } from '@angular/core';
import { CrudForCard } from '../model/crud.interface';
import { Student } from '../model/student.model';
import { randStudent } from './fake-http.service';

@Injectable({
  providedIn: 'root',
})
export class StudentStore implements CrudForCard<Student> {
  public students = signal<Student[]>([]);
  public randData = randStudent;
  constructor() {}
  addAll(students: Student[]) {
    this.students.set(students);
  }

  addOne(student: Student) {
    this.students.set([...this.students(), student]);
  }

  deleteOne(id: number) {
    this.students.set(this.students().filter((s) => s.id !== id));
  }
}

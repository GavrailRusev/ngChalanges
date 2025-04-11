import { Injectable, signal } from '@angular/core';
import { CrudForCard } from '../model/crud.interface';
import { Teacher } from '../model/teacher.model';
import { randTeacher } from './fake-http.service';

@Injectable({
  providedIn: 'root',
})
export class TeacherStore implements CrudForCard<Teacher> {
  public teachers = signal<Teacher[]>([]);
  public randData = randTeacher;
  addAll(teachers: Teacher[]) {
    this.teachers.set(teachers);
  }

  addOne(teacher: Teacher) {
    this.teachers.set([...this.teachers(), teacher]);
  }

  deleteOne(id: number) {
    this.teachers.set(this.teachers().filter((t) => t.id !== id));
  }
}

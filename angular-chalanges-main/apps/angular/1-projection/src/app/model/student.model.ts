import { Teacher } from './teacher.model';

export interface Student {
  type: string;
  id: number;
  firstName: string;
  lastName: string;
  mainTeacher: Teacher;
  school: string;
}
export interface Test {
  type: string;
  id: number;
  firstName: string;
  lastName: string;
  mainTeacher: Teacher;
  school: string;
}

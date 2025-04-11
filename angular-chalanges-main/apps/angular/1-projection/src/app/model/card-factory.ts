import { CityStore } from '../data-access/city.store';
import { StudentStore } from '../data-access/student.store';
import { TeacherStore } from '../data-access/teacher.store';
import { City } from './city.model';
import { Student } from './student.model';
import { Teacher } from './teacher.model';
export type StoreTypes = TeacherStore | StudentStore | CityStore;
export type CardTypes = Student | City | Teacher;
// Mapping of class constructors
export type StoreConstructor =
  | typeof TeacherStore
  | typeof StudentStore
  | typeof CityStore;

// Factory function
export const CardFactory = (type: StoreConstructor): StoreTypes => {
  switch (type) {
    case TeacherStore:
      return new TeacherStore();
    case StudentStore:
      return new StudentStore();
    case CityStore:
      return new CityStore();
    default:
      // TypeScript will now enforce exhaustive checking
      const _exhaustiveCheck: never = type as never;
      throw new Error(`Unhandled store type: ${_exhaustiveCheck}`);
  }
};

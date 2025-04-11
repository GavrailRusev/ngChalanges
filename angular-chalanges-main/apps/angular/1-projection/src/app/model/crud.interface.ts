export interface CrudForCard<T> {
  randData: () => T;
  addAll(items: T[]): void;
  addOne(item: T): void;
  deleteOne(id: number): void;
}

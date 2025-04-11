export const subject = [
  'Sciences',
  'History',
  'English',
  'Maths',
  'Sport',
] as const;
export type Subject = (typeof subject)[number];

export interface Teacher {
  type: string;
  id: number;
  firstName: string;
  lastName: string;
  subject: Subject;
}

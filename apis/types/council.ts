export interface Council {
  id: number;
  title: string;
  description: string;
  sequence: number;
  name: string;
  createdAt: string;
  prevId: number;
  prevTitle: string;
  nextId: number;
  nextTitle: string;
}

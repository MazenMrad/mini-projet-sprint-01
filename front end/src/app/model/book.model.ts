import { Type } from './type.model';

export class Book {
  idBook!: number;
  nomBook!: string;
  prixBook!: number;
  dateCreation!: Date;
  type!: Type;
}

import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Book } from '../model/book.model';
import { Type } from '../model/type.model';
import { BookService } from '../services/book';

@Component({
  selector: 'app-recherche-par-type',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './recherche-par-type.html',
  styles: ``
})
export class RechercheParType implements OnInit {

  books!: Book[];
  idType!: number;
  types!: Type[];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.listeTypes().
      subscribe(types => { this.types = types;
                           console.log(types);
      });
  }

  onChange() {
    this.bookService.rechercherParType(this.idType).
      subscribe(books => { this.books = books });
  }
}

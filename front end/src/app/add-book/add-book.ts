import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { Book } from '../model/book.model';
import { Type } from '../model/type.model';
import { BookService } from '../services/book';

@Component({
  selector: 'app-add-book',
  imports: [FormsModule],
  templateUrl: './add-book.html',
  styleUrl: './add-book.css',
})
export class AddBook implements OnInit {

  newBook = new Book();
  types!: Type[];
  newIdType!: number;
  newType!: Type;

  constructor(private bookService: BookService,
              private router: Router) { }

  ngOnInit(): void {
    this.bookService.listeTypes().
      subscribe(types => { this.types = types;
                           console.log(types);
      });
  }

  addBook() {
    this.newType =
      this.types.find(type => type.idType == this.newIdType)!;
    this.newBook.type = this.newType;
    this.bookService.ajouterBook(this.newBook).
      subscribe(book => {
        console.log(book);
        this.router.navigate(['books']);
      });
  }
}

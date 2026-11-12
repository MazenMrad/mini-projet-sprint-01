import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { Book } from '../model/book.model';
import { Type } from '../model/type.model';
import { BookService } from '../services/book';

@Component({
  selector: 'app-update-book',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-book.html',
  styles: ``
})
export class UpdateBook implements OnInit {

  currentBook = new Book();
  types!: Type[];
  updatedTypeId!: number;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.listeTypes().
      subscribe(types => { this.types = types;
                           console.log(types);
      });
    this.bookService.consulterBook(this.activatedRoute.snapshot.params['id']).
      subscribe(book => { this.currentBook = book;
                          this.updatedTypeId = this.currentBook.type.idType;
      });
  }

  updateBook() {
    this.currentBook.type = this.types.
      find(type => type.idType == this.updatedTypeId)!;
    this.bookService.updateBook(this.currentBook).subscribe(() => {
      this.router.navigate(['books']); }
    );
  }
}

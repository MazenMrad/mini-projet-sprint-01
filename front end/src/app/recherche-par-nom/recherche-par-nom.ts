import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Book } from '../model/book.model';
import { BookService } from '../services/book';
import { SearchFilterPipe } from '../search-filter-pipe';

@Component({
  selector: 'app-recherche-par-nom',
  standalone: true,
  imports: [FormsModule, CommonModule, SearchFilterPipe],
  templateUrl: './recherche-par-nom.html',
  styles: ``
})
export class RechercheParNom implements OnInit {

  nomBook: string = '';
  books!: Book[];
  allBooks!: Book[];
  searchTerm: string = '';

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.listeBook().subscribe(books => {
      console.log(books);
      this.books = books;
      this.allBooks = books;
    });
  }

  rechercherBooks() {
    if (this.nomBook)
      this.bookService
        .rechercherParNom(this.nomBook)
        .subscribe((books) => {
          console.log(books);
          this.books = books;
        });
    else
      this.bookService.listeBook().subscribe((books) => {
        console.log(books);
        this.books = books;
      });
  }

  onKeyUp(filterText: string) {
    this.books = this.allBooks.filter(item =>
      item.nomBook.toLowerCase().includes(filterText));
  }
}

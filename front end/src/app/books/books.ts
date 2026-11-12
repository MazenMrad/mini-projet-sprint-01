import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Book } from '../model/book.model';
import { AuthService } from '../services/auth';
import { BookService } from '../services/book';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './books.html',
  styleUrl: './books.css',
})
export class Books implements OnInit {

  books!: Book[];

  constructor(private bookService: BookService,
              public authService: AuthService) { }

  ngOnInit(): void {
    this.chargerBooks();
  }

  chargerBooks() {
    this.bookService.listeBook().subscribe(books => {
      console.log(books);
      this.books = books;
    });
  }

  supprimerBook(b: Book) {
    let conf = confirm('Etes-vous sûr ?');
    if (conf)
      this.bookService.supprimerBook(b.idBook).subscribe(() => {
        console.log('book supprimé');
        this.chargerBooks();
      });
  }
}

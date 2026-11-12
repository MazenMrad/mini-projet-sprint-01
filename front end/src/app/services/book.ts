import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Book } from '../model/book.model';
import { Type } from '../model/type.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class BookService {
  apiURL: string = 'http://localhost:8085/books/api';
  apiURLType: string = 'http://localhost:8085/books/api/type';

  constructor(private http: HttpClient) { }

  listeBook(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiURL + "/all");
  }

  ajouterBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.apiURL + "/addbook", book, httpOptions);
  }

  supprimerBook(id: number) {
    const url = `${this.apiURL}/delbook/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consulterBook(id: number): Observable<Book> {
    const url = `${this.apiURL}/getbyid/${id}`;
    return this.http.get<Book>(url);
  }

  updateBook(book: Book): Observable<Book> {
    return this.http.put<Book>(this.apiURL + "/updatebook", book, httpOptions);
  }

  listeTypes(): Observable<Type[]> {
    return this.http.get<Type[]>(this.apiURLType);
  }

  ajouterType(type: Type): Observable<Type> {
    return this.http.post<Type>(this.apiURLType, type, httpOptions);
  }

  modifierType(type: Type): Observable<Type> {
    return this.http.put<Type>(this.apiURLType, type, httpOptions);
  }

  rechercherParType(idType: number): Observable<Book[]> {
    const url = `${this.apiURL}/bookstype/${idType}`;
    return this.http.get<Book[]>(url);
  }

  rechercherParNom(nom: string): Observable<Book[]> {
    const url = `${this.apiURL}/booksByName/${nom}`;
    return this.http.get<Book[]>(url);
  }
}

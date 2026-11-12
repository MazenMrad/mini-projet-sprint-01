import { Routes } from '@angular/router';
import { Books } from './books/books';
import { AddBook } from './add-book/add-book';
import { UpdateBook } from './update-book/update-book';
import { RechercheParType } from './recherche-par-type/recherche-par-type';
import { RechercheParNom } from './recherche-par-nom/recherche-par-nom';
import { ListeTypes } from './liste-types/liste-types';
import { Login } from './login/login';
import { Forbidden } from './forbidden/forbidden';
import { Register } from './register/register';
import { VerifEmail } from './verif-email/verif-email';
import { bookGuard } from './services/book.guard';

export const routes: Routes = [
  { path: 'books', component: Books },
  { path: 'add-book', component: AddBook, canActivate: [bookGuard] },
  { path: 'updateBook/:id', component: UpdateBook },
  { path: 'rechercheParType', component: RechercheParType },
  { path: 'rechercheParNom', component: RechercheParNom },
  { path: 'listeTypes', component: ListeTypes },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'verifEmail', component: VerifEmail },
  { path: 'app-forbidden', component: Forbidden },
  { path: '', redirectTo: 'books', pathMatch: 'full' },
];

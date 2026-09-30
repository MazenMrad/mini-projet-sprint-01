package com.example.demo.service;

import java.util.List;

import com.example.demo.entities.Book;
import com.example.demo.entities.Type;

public interface BookService {

	Book saveBook(Book b);

	Book updateBook(Book b);

	void deleteBook(Book b);

	void deleteBookById(Long id);

	Book getBook(Long id);

	List<Book> getAllBooks();

	List<Book> findByNomBook(String nom);

	List<Book> findByNomBookContains(String nom);

	List<Book> findByNomPrix(String nom, Double prix);

	List<Book> findByType(Type type);

	List<Book> findByTypeIdType(Long id);

	List<Book> findByOrderByNomBookAsc();

	List<Book> trierBooksNomsPrix();
}

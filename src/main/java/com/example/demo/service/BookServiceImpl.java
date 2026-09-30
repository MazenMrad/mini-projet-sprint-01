package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Book;
import com.example.demo.entities.Type;
import com.example.demo.repos.BookRepository;

@Service
public class BookServiceImpl implements BookService {

	@Autowired
	BookRepository bookRepository;

	@Override
	public Book saveBook(Book b) {
		return bookRepository.save(b);
	}

	@Override
	public Book updateBook(Book b) {
		return bookRepository.save(b);
	}

	@Override
	public void deleteBook(Book b) {
		bookRepository.delete(b);
	}

	@Override
	public void deleteBookById(Long id) {
		bookRepository.deleteById(id);
	}

	@Override
	public Book getBook(Long id) {
		return bookRepository.findById(id).get();
	}

	@Override
	public List<Book> getAllBooks() {
		return bookRepository.findAll();
	}

	@Override
	public List<Book> findByNomBook(String nom) {
		return bookRepository.findByNomBook(nom);
	}

	@Override
	public List<Book> findByNomBookContains(String nom) {
		return bookRepository.findByNomBookContains(nom);
	}

	@Override
	public List<Book> findByNomPrix(String nom, Double prix) {
		return bookRepository.findByNomPrix(nom, prix);
	}

	@Override
	public List<Book> findByType(Type type) {
		return bookRepository.findByType(type);
	}

	@Override
	public List<Book> findByTypeIdType(Long id) {
		return bookRepository.findByTypeIdType(id);
	}

	@Override
	public List<Book> findByOrderByNomBookAsc() {
		return bookRepository.findByOrderByNomBookAsc();
	}

	@Override
	public List<Book> trierBooksNomsPrix() {
		return bookRepository.trierBooksNomsPrix();
	}
}

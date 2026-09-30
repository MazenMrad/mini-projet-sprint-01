package com.example.demo;

import java.util.Date;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.demo.entities.Book;
import com.example.demo.entities.Type;
import com.example.demo.repos.BookRepository;
import com.example.demo.repos.TypeRepository;

@SpringBootTest
class TypeApplicationTests {

	@Autowired
	private BookRepository bookRepository;

	@Autowired
	private TypeRepository typeRepository;

	@Test
	public void testCreateBook() {
		Book book = new Book("Le Petit Prince", 25.500, new Date());
		bookRepository.save(book);
	}

	@Test
	public void testFindBook() {
		Book b = bookRepository.findById(1L).get();
		System.out.println(b);
	}

	@Test
	public void testUpdateBook() {
		Book b = bookRepository.findById(1L).get();
		b.setPrixBook(1000.0);
		bookRepository.save(b);
	}

	@Test
	public void testDeleteBook() {
		bookRepository.deleteById(1L);
	}

	@Test
	public void testListerTousBooks() {
		List<Book> books = bookRepository.findAll();
		for (Book b : books) {
			System.out.println(b);
		}
	}

	@Test
	public void testFindByNomBook() {
		List<Book> books = bookRepository.findByNomBook("Le Petit Prince");
		for (Book b : books) {
			System.out.println(b);
		}
	}

	@Test
	public void testFindByNomBookContains() {
		List<Book> books = bookRepository.findByNomBookContains("Petit");
		for (Book b : books) {
			System.out.println(b);
		}
	}

	@Test
	public void testfindByNomPrix() {
		List<Book> books = bookRepository.findByNomPrix("Le Petit Prince", 1000.0);
		for (Book b : books) {
			System.out.println(b);
		}
	}

	@Test
	public void testfindByType() {
		Type type = typeRepository.findById(1L).get();
		List<Book> books = bookRepository.findByType(type);
		for (Book b : books) {
			System.out.println(b);
		}
	}

	@Test
	public void findByTypeIdType() {
		List<Book> books = bookRepository.findByTypeIdType(1L);
		for (Book b : books) {
			System.out.println(b);
		}
	}

	@Test
	public void testfindByOrderByNomBookAsc() {
		List<Book> books = bookRepository.findByOrderByNomBookAsc();
		for (Book b : books) {
			System.out.println(b);
		}
	}

	@Test
	public void testTrierBooksNomsPrix() {
		List<Book> books = bookRepository.trierBooksNomsPrix();
		for (Book b : books) {
			System.out.println(b);
		}
	}
}

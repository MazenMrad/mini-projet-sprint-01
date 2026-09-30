package com.example.demo.restcontrollers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Book;
import com.example.demo.service.BookService;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class BookRESTController {

	@Autowired
	BookService bookService;

	@GetMapping()
	public List<Book> getAllBooks() {
		return bookService.getAllBooks();
	}

	@GetMapping("/{id}")
	public Book getBookById(@PathVariable("id") Long id) {
		return bookService.getBook(id);
	}

	@PostMapping()
	public Book createBook(@RequestBody Book book) {
		return bookService.saveBook(book);
	}

	@PutMapping()
	public Book updateBook(@RequestBody Book book) {
		return bookService.updateBook(book);
	}

	@DeleteMapping("/{id}")
	public void deleteBook(@PathVariable("id") Long id) {
		bookService.deleteBookById(id);
	}

	@GetMapping("/bookstype/{idType}")
	public List<Book> getBooksByTypeId(@PathVariable("idType") Long idType) {
		return bookService.findByTypeIdType(idType);
	}
}

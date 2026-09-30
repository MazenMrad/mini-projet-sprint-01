package com.example.demo.entities;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Book {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idBook;

	private String nomBook;

	private Double prixBook;

	private Date dateCreation;

	@ManyToOne
	private Type type;

	public Book() {
		super();
	}

	public Book(String nomBook, Double prixBook, Date dateCreation) {
		super();
		this.nomBook = nomBook;
		this.prixBook = prixBook;
		this.dateCreation = dateCreation;
	}

	public Long getIdBook() {
		return idBook;
	}

	public void setIdBook(Long idBook) {
		this.idBook = idBook;
	}

	public String getNomBook() {
		return nomBook;
	}

	public void setNomBook(String nomBook) {
		this.nomBook = nomBook;
	}

	public Double getPrixBook() {
		return prixBook;
	}

	public void setPrixBook(Double prixBook) {
		this.prixBook = prixBook;
	}

	public Date getDateCreation() {
		return dateCreation;
	}

	public void setDateCreation(Date dateCreation) {
		this.dateCreation = dateCreation;
	}

	public Type getType() {
		return type;
	}

	public void setType(Type type) {
		this.type = type;
	}

	@Override
	public String toString() {
		return "Book [idBook=" + idBook + ", nomBook=" + nomBook + ", prixBook=" + prixBook + ", dateCreation="
				+ dateCreation + "]";
	}
}

package com.example.demo.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Type;

public interface TypeRepository extends JpaRepository<Type, Long> {

}

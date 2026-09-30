package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Type;
import com.example.demo.repos.TypeRepository;

@Service
public class TypeServiceImpl implements TypeService {

	@Autowired
	TypeRepository typeRepository;

	@Override
	public Type saveType(Type t) {
		return typeRepository.save(t);
	}

	@Override
	public Type updateType(Type t) {
		return typeRepository.save(t);
	}

	@Override
	public void deleteType(Type t) {
		typeRepository.delete(t);
	}

	@Override
	public void deleteTypeById(Long id) {
		typeRepository.deleteById(id);
	}

	@Override
	public Type getType(Long id) {
		return typeRepository.findById(id).get();
	}

	@Override
	public List<Type> getAllTypes() {
		return typeRepository.findAll();
	}
}

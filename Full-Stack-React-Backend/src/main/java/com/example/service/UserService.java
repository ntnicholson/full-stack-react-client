package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.User;
import com.example.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	UserRepository userRepo;
	
	public List<User> findAll() {
		return userRepo.findAll();
	}
	public void saveUser(User u) {
		userRepo.save(u);
	}
	public void deleteUser(Long id) {
		userRepo.deleteById(id);
	}
	
	
}

package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.User;
import com.example.demo.service.UserService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/user")
public class UserRestController {
	
	@Autowired
	UserService userService;

	@GetMapping("/test")
	public String test(){
		return "Hello";
	}
	@GetMapping("")
	public List<User> listUser(){
		return userService.findAll();
	}
	@PostMapping("/add")
	public String addUser(@RequestBody User  u){

		userService.saveUser(u);
		return "User saved";
	}
	@DeleteMapping(value = "/{id}")
	public void deleteUser(@PathVariable("id") Long id){
		userService.deleteUser(id);
		System.out.println("User deleted");
	}
	
}

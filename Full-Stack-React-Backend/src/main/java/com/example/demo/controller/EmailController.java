package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.ContactForm;
import com.example.demo.service.EmailService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController()
@RequestMapping("/email")
public class EmailController {
	
	@Autowired
	EmailService emailService;
	
	@PostMapping("/send")
	public String sendEmail(@RequestBody ContactForm accountRegistrationForm) {
		String to = "ntnicholson@crimson.ua.edu";
		String from = "OnlineBookstore.com <auto-confirm@onlinebookstore.com>";
		String subject = "First Spring Mail Email";
		String body = "Hello, World.";
		emailService.sendSimpleMessage(to, from, subject, body);
		return "Check email";
	}

}

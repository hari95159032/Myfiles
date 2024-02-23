package com.book.microservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/books")
public class BookController {
	
	@Autowired
	BookService service;

	@GetMapping
	List<Book> getAllbooks() {
		return service.getAllbooks();
	}
	
	@GetMapping("/book/{id}")
	Book getBookById(@PathVariable Integer id) {
		return service.getBookById(id);
	}
	
	@PostMapping("/user")
	String addEmployee(@RequestBody Object user) {
		return service.addUser(user);
	}
	
	@GetMapping("/user")
	Object[] getAllEmployees() {
		return service.getAllUsers();
	}
	

}

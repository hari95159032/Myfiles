package com.book.microservice;

import java.util.Arrays;
import java.util.List;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;



@Service
public class BookService {
	
	@Autowired
	RestTemplate restTemplate;

	
	List<Book> listOfBooks =new ArrayList<>(Arrays.asList(
			new Book(101, "Rich Dad Poor Dad", "self-gelf"),
	        new Book(102, "The power of subconcious mind", "self-helf"),
	        new Book(212, "The secret the power", "self-help"),
	        new Book(104, "Alchemist", "self-help")
			));
	
	List<Book> getAllbooks() {
		return listOfBooks;
	}
	
	Book getBookById(Integer id) {
		return listOfBooks.get(id);
	}
	
	
	
	Object[] getAllUsers() {
		String url = "http://localhost:8084/api/v1/users";
		Object[] returnedData = restTemplate.getForObject(url, Object[].class);
		return returnedData;
	}
	
	String addUser(Object user) {
		String urlToHit = "http://localhost:8084/api/v1/users";
		String data = restTemplate.postForObject(urlToHit, user, String.class);
		return data;
	}
	
}

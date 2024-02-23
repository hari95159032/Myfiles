package com.spring.micro.cart.Cart;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/cart")
public class CartController {

	@Autowired
	CartService service;
	
	@PostMapping("/{productId}/{quantity}")
	Cart addCart(@PathVariable Integer productId,@PathVariable Integer quantity) {
		return service.addCart(productId, quantity);
	}
	
	
	@GetMapping
	public List<Cart> getAllItems(){
		return service.getAllItems();
	}
}

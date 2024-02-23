package com.spring.micro.cart.Cart;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.spring.cart.dto.Product;

@Service
public class CartService {

	@Autowired
	private RestTemplate restTemplate;
	
	@Autowired
	private CartRepository repository;
	
	Cart addCart(Integer productId,Integer quantity) {
		Product product = getProduct(productId);
		double total = product.price()*quantity;
		
		Cart cart = new Cart();
		cart.setPrice(total);
		cart.setProductId(productId);
		cart.setQuantity(quantity);
		
		return repository.save(cart);
		
	}
	public List<Cart> getAllItems(){
        return repository.findAll();
    }
	
	
	Product getProduct(Integer id) {
		Product product= restTemplate.getForObject("http://product-service/products/"+id, Product.class);
		
		return product;
	}
	
}

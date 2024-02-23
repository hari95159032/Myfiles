package com.book.microservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
@EnableEurekaClient
public class BookMicroservicesApplication {

	public static void main(String[] args) {
		SpringApplication.run(BookMicroservicesApplication.class, args);
	}
	
	
	@Bean
	RestTemplate getRestTemplate() {
		return new RestTemplate();
	}

}

package com.shop.service;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import com.shop.model.Product;
import com.shop.repository.ProductRepository;

@Service
public class ProductService {

    @Autowired
    private ProductRepository repo;

    public List<Product> getAllProducts() {
        return repo.findAll();
    }

    public Product saveProduct(Product product) {
        return repo.save(product);
    }
}

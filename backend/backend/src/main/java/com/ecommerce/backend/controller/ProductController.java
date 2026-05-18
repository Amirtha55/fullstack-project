package com.ecommerce.backend.controller;

import com.ecommerce.backend.entity.Product;
import com.ecommerce.backend.repository.ProductRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

        import java.util.List;

@RestController
@CrossOrigin("*")

public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping("/products")
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @PostMapping("/products")
    public Product createProduct(
            @RequestBody Product product) {

        return productRepository.save(product);
    }

    @DeleteMapping("/products/{id}")
    public String deleteProduct(
            @PathVariable Long id) {

        productRepository.deleteById(id);

        return "Product Deleted";
    }

    @PutMapping("/products/{id}")

    public Product updateProduct(

            @PathVariable Long id,

            @RequestBody Product updatedProduct) {

        Product product =
                productRepository.findById(id).orElse(null);

        if (product != null) {

            product.setName(updatedProduct.getName());

            product.setPrice(updatedProduct.getPrice());

            product.setImage(updatedProduct.getImage());

            return productRepository.save(product);

        }

        return null;
    }
}
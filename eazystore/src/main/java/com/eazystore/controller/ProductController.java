package com.eazystore.controller;

import com.eazystore.dto.ProductDto;
import com.eazystore.entity.Product;
import com.eazystore.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/products")
@RequiredArgsConstructor
//@CrossOrigin(origins = "http://localhost:5173")
public class ProductController {

    private final ProductService productService;

    @GetMapping
    public List<ProductDto> getProducts(){
        List<ProductDto> productList = productService.getProducts();
        return productList;
    }
}

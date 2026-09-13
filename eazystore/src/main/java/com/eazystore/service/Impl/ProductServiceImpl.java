package com.eazystore.service.Impl;

import com.eazystore.dto.ProductDto;
import com.eazystore.mapper.ProductMapper;
import com.eazystore.repository.ProductRepository;
import com.eazystore.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;
    private final ProductMapper productMapper;

    @Override
    public List<ProductDto> getProducts() {
        return productRepository.findAll()
                .stream().map(productMapper::toDto).collect(Collectors.toList());
    }
}

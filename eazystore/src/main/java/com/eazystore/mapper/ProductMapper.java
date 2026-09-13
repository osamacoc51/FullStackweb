package com.eazystore.mapper;

import com.eazystore.dto.ProductDto;
import com.eazystore.entity.Product;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface ProductMapper {

    @Mapping(target = "productId", source = "id")
    @Mapping(target = "createAt", source = "createdAt")
    ProductDto toDto(Product product);
}
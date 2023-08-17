package com.desarrollo.cuatrolinea.security.model;

import org.springframework.data.repository.CrudRepository;

public interface TokenRepository extends CrudRepository<Token, String> {
    Token findItemByUser(User user);
}
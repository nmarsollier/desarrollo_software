package com.desarrollo.cuatrolinea.security.model;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, String> {

    User findItemByName(String name);
}
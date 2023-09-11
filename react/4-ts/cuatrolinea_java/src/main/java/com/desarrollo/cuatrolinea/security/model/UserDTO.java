package com.desarrollo.cuatrolinea.security.model;

import com.desarrollo.cuatrolinea.security.model.User;


public class UserDTO {
    public String name;

    public UserDTO(User user) {
        this.name = user.name;
    }
}

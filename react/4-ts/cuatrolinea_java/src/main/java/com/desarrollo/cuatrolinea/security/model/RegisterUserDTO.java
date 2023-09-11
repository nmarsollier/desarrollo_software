package com.desarrollo.cuatrolinea.security.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

public class RegisterUserDTO {
    public String userName;
    public String password;

    @JsonCreator
    public RegisterUserDTO(
            @JsonProperty(required = true) String userName,
            @JsonProperty(required = true) String password
    ) {
        this.userName = userName;
        this.password = password;
    }
}
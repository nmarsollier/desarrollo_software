package com.desarrollo.cuatrolinea.security.pojo;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

public class RegisterData {
    public String userName;
    public String password;

    @JsonCreator
    public RegisterData(
            @JsonProperty(required = true) String userName,
            @JsonProperty(required = true) String password
    ) {
        this.userName = userName;
        this.password = password;
    }
}
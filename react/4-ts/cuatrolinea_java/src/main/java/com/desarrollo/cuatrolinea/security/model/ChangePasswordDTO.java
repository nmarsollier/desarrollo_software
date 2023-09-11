package com.desarrollo.cuatrolinea.security.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

public class ChangePasswordDTO {
    public String newPassword;
    public String currentPassword;

    @JsonCreator
    public ChangePasswordDTO(
            @JsonProperty(required = true) String currentPassword,
            @JsonProperty(required = true) String newPassword
    ) {
        this.currentPassword = currentPassword;
        this.newPassword = newPassword;
    }
}
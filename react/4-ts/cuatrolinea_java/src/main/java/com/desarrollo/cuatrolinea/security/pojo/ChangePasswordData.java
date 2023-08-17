package com.desarrollo.cuatrolinea.security.pojo;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

public class ChangePasswordData {
    public String newPassword;
    public String currentPassword;

    @JsonCreator
    public ChangePasswordData(
            @JsonProperty(required = true) String currentPassword,
            @JsonProperty(required = true) String newPassword
    ) {
        this.currentPassword = currentPassword;
        this.newPassword = newPassword;
    }
}
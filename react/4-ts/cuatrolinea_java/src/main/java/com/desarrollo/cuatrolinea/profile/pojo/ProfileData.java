package com.desarrollo.cuatrolinea.profile.pojo;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

public class ProfileData {

    public String name;

    public String email;

    public String address;

    public String provinceId;

    public String picture;

    public final String phone;

    @JsonCreator
    public ProfileData(
            @JsonProperty(required = true) String name,
            @JsonProperty() String email,
            @JsonProperty() String address,
            @JsonProperty() String provinceId,
            @JsonProperty() String picture,
            @JsonProperty() String phone
    ) {
        this.name = name;
        this.email = email;
        this.provinceId = provinceId;
        this.address = address;
        this.picture = picture;
        this.phone = phone;
    }
}
package com.desarrollo.cuatrolinea.provinces.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

public class NewProvinceDTO {

    public String name;

    @JsonCreator
    public NewProvinceDTO(
            @JsonProperty(required = true) String name
    ) {
        this.name = name;
    }
}

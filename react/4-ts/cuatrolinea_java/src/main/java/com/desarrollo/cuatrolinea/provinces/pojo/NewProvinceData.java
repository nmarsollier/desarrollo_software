package com.desarrollo.cuatrolinea.provinces.pojo;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

public class NewProvinceData {

    public String name;

    @JsonCreator
    public NewProvinceData(
            @JsonProperty(required = true) String name
    ) {
        this.name = name;
    }
}

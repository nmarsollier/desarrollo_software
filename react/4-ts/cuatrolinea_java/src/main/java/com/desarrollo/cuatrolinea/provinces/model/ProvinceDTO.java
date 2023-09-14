package com.desarrollo.cuatrolinea.provinces.model;

public class ProvinceDTO {
    public String id;

    public String name;

    public ProvinceDTO(Province province) {
        this.id = province.id;
        this.name = province.name;
    }
}


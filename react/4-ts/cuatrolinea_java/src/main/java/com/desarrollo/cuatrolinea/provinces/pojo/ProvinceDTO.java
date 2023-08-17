package com.desarrollo.cuatrolinea.provinces.pojo;

import com.desarrollo.cuatrolinea.provinces.model.Province;

public class ProvinceDTO {
    public String id;

    public String name;

    public ProvinceDTO(Province province) {
        this.id = province.id;
        this.name = province.name;
    }
}


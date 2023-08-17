package com.desarrollo.cuatrolinea.provinces.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Province {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    public String id;


    public String name;

    public Province() {

    }

    public Province(String name) {
        super();
        this.name = name;
    }
}

package com.desarrollo.cuatrolinea.security.model;

import jakarta.persistence.*;

@Entity
@Table(
        uniqueConstraints = @UniqueConstraint(columnNames = {"name"})
)
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    public String id;

    public String name;

    public String password;

    public User() {

    }

    public User(String name, String password) {
        super();
        this.name = name;
        this.password = password;
    }
}

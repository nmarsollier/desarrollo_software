package com.desarrollo.cuatrolinea.profile.model;

import com.desarrollo.cuatrolinea.provinces.model.Province;
import com.desarrollo.cuatrolinea.security.model.User;
import jakarta.persistence.*;

@Entity
public class Profile {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    public String id;

    @ManyToOne
    public User user;

    public String name;

    public String email;

    public String address;

    @ManyToOne
    public Province province;

    @Lob
    @Column(columnDefinition = "TEXT")
    public String picture;

    public String phone;

    public Profile() {

    }

    public Profile(User user, String name, String email, String picture, Province province, String address, String phone) {
        super();
        this.user = user;
        this.name = name;
        this.email = email;
        this.province = province;
        this.address = address;
        this.picture = picture;
        this.phone = phone;
    }
}

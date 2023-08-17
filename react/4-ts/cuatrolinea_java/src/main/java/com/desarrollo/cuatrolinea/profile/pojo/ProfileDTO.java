package com.desarrollo.cuatrolinea.profile.pojo;

import com.desarrollo.cuatrolinea.profile.model.Profile;
import com.desarrollo.cuatrolinea.security.model.User;
import com.fasterxml.jackson.annotation.JsonCreator;

public class ProfileDTO {
    public String login;

    public String name;

    public String email;

    public String address;

    public String provinceId;

    public String picture;

    public String phone;

    @JsonCreator
    public ProfileDTO(User user, Profile profile) {
        this.login = user.name;
        if (profile != null) {
            this.name = profile.name;
            this.email = profile.email;
            if (profile.province != null) {
                this.provinceId = profile.province.id;
            }
            this.address = profile.address;
            this.picture = profile.picture;
            this.phone = profile.phone;
        } else {
            this.name = user.name;
        }
    }

}

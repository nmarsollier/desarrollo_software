package com.desarrollo.cuatrolinea.profile.model;

import com.desarrollo.cuatrolinea.security.model.User;
import org.springframework.data.repository.CrudRepository;

public interface ProfileRepository extends CrudRepository<Profile, String> {
    Profile findItemByUser(User user);
}
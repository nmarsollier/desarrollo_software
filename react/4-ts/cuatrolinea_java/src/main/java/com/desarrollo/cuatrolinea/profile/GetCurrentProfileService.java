package com.desarrollo.cuatrolinea.profile;

import com.desarrollo.cuatrolinea.profile.model.Profile;
import com.desarrollo.cuatrolinea.profile.model.ProfileDTO;
import com.desarrollo.cuatrolinea.profile.model.ProfileRepository;
import com.desarrollo.cuatrolinea.security.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GetCurrentProfileService {

    @Autowired
    ProfileRepository profileRepository;

    public ProfileDTO currentProfile(User user) {
        Profile profile = profileRepository.findItemByUser(user);
        return new ProfileDTO(user, profile);
    }
}

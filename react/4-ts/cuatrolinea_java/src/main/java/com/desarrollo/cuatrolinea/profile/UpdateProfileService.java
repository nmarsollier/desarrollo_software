package com.desarrollo.cuatrolinea.profile;

import com.desarrollo.cuatrolinea.profile.model.Profile;
import com.desarrollo.cuatrolinea.profile.model.ProfileDTO;
import com.desarrollo.cuatrolinea.profile.model.ProfileRepository;
import com.desarrollo.cuatrolinea.profile.model.ProfileUpdateDTO;
import com.desarrollo.cuatrolinea.provinces.model.Province;
import com.desarrollo.cuatrolinea.provinces.model.ProvinceRepository;
import com.desarrollo.cuatrolinea.security.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UpdateProfileService {

    @Autowired
    ProfileRepository profileRepository;

    @Autowired
    ProvinceRepository provinceRepository;


    public ProfileDTO update(
            User user,
            ProfileUpdateDTO profileUpdateDTO
    ) {
        Province province = null;
        if (profileUpdateDTO.provinceId != null) {
            province = provinceRepository.findById(profileUpdateDTO.provinceId).orElse(null);
        }

        Profile profile = profileRepository.findItemByUser(user);
        if (profile == null) {
            profile = new Profile(user, profileUpdateDTO.name, profileUpdateDTO.email, profileUpdateDTO.picture, province, profileUpdateDTO.address, profileUpdateDTO.phone);
        } else {
            profile.name = profileUpdateDTO.name;
            profile.email = profileUpdateDTO.email;
            profile.province = province;
            profile.address = profileUpdateDTO.address;
            profile.picture = profileUpdateDTO.picture;
            profile.phone = profileUpdateDTO.phone;
        }

        profileRepository.save(profile);

        return new ProfileDTO(user, profile);
    }
}

package com.desarrollo.cuatrolinea.profile;

import com.desarrollo.cuatrolinea.profile.model.Profile;
import com.desarrollo.cuatrolinea.profile.model.ProfileRepository;
import com.desarrollo.cuatrolinea.profile.pojo.ProfileDTO;
import com.desarrollo.cuatrolinea.profile.pojo.ProfileData;
import com.desarrollo.cuatrolinea.provinces.model.Province;
import com.desarrollo.cuatrolinea.provinces.model.ProvinceRepository;
import com.desarrollo.cuatrolinea.security.AuthValidation;
import com.desarrollo.cuatrolinea.security.model.TokenRepository;
import com.desarrollo.cuatrolinea.security.model.User;
import com.desarrollo.cuatrolinea.security.model.UserRepository;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping(value = "/profile")
public class ProfileModel {
    @Autowired
    UserRepository userRepository;

    @Autowired
    TokenRepository tokenRepository;

    @Autowired
    ProfileRepository profileRepository;

    @Autowired
    ProvinceRepository provinceRepository;


    @Tag(name = "Profile", description = "Update current user profile")
    @PostMapping(
            value = "/update",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ProfileDTO update(
            @RequestHeader(HttpHeaders.AUTHORIZATION) String auth,
            @RequestBody ProfileData profileData
    ) {
        User user = AuthValidation.validateAuthUser(tokenRepository, auth);

        Province province = null;
        if (profileData.provinceId != null) {
            province = provinceRepository.findById(profileData.provinceId).orElse(null);
        }

        Profile profile = profileRepository.findItemByUser(user);
        if (profile == null) {
            profile = new Profile(user, profileData.name, profileData.email, profileData.picture, province, profileData.address, profileData.phone);
        } else {
            profile.name = profileData.name;
            profile.email = profileData.email;
            profile.province = province;
            profile.address = profileData.address;
            profile.picture = profileData.picture;
            profile.phone = profileData.phone;
        }

        profileRepository.save(profile);

        return new ProfileDTO(user, profile);
    }

    @Tag(name = "Profile", description = "Get current user profile")
    @GetMapping(
            value = "/current",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ProfileDTO currentUser(@RequestHeader(HttpHeaders.AUTHORIZATION) String auth) {
        User user = AuthValidation.validateAuthUser(tokenRepository, auth);
        Profile profile = profileRepository.findItemByUser(user);
        return new ProfileDTO(user, profile);
    }
}

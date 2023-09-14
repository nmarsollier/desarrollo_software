package com.desarrollo.cuatrolinea.profile;

import com.desarrollo.cuatrolinea.profile.model.ProfileDTO;
import com.desarrollo.cuatrolinea.profile.model.ProfileUpdateDTO;
import com.desarrollo.cuatrolinea.security.AuthValidationService;
import com.desarrollo.cuatrolinea.security.model.TokenRepository;
import com.desarrollo.cuatrolinea.security.model.User;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping(value = "/profile")
public class ProfileRestController {
    @Autowired
    AuthValidationService authValidationService;

    @Autowired
    UpdateProfileService updateProfileService;

    @Autowired
    GetCurrentProfileService getCurrentProfileService;

    @Autowired
    TokenRepository tokenRepository;

    @Tag(name = "Profile", description = "Update current user profile")
    @PostMapping(
            value = "/update",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ProfileDTO update(
            @RequestHeader(HttpHeaders.AUTHORIZATION) String auth,
            @RequestBody ProfileUpdateDTO profileUpdateDTO
    ) {
        User user = authValidationService.validateAuthUser(tokenRepository, auth);

        return updateProfileService.update(user, profileUpdateDTO);
    }

    @Tag(name = "Profile", description = "Get current user profile")
    @GetMapping(
            value = "/current",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ProfileDTO currentUser(@RequestHeader(HttpHeaders.AUTHORIZATION) String auth) {
        User user = authValidationService.validateAuthUser(tokenRepository, auth);
        return getCurrentProfileService.currentProfile(user);
    }
}

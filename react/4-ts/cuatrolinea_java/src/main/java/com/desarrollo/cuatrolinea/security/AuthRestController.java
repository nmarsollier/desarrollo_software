package com.desarrollo.cuatrolinea.security;

import com.desarrollo.cuatrolinea.security.model.*;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping(value = "/user")
public class AuthRestController {
    @Autowired
    AuthValidationService validation;

    @Autowired
    AuthService authService;

    @Autowired
    TokenRepository tokenRepository;

    @Tag(name = "User",
            description = "Register a new user in the paltform")
    @PostMapping(
            value = "/register",
            consumes = {MediaType.APPLICATION_JSON_VALUE},
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public TokenDTO register(@RequestBody RegisterUserDTO registerUserDTO) {
        return authService.register(registerUserDTO);
    }

    @Tag(name = "User",
            description = "Get info about current user")
    @GetMapping(
            value = "/current",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public UserDTO currentUser(@RequestHeader(HttpHeaders.AUTHORIZATION) String auth) {
        User user = validation.validateAuthUser(tokenRepository, auth);
        return authService.currentUser(user);
    }

    @Tag(name = "User", description = "Login in the app")
    public @PostMapping(
            value = "/login",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    TokenDTO login(@RequestBody RegisterUserDTO registerUserDTO) {
        return authService.login(registerUserDTO);
    }

    @Tag(name = "User", description = "Change current user password")
    public @PostMapping(
            value = "/changePassword",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    void changePassword(
            @RequestHeader(HttpHeaders.AUTHORIZATION) String auth,
            @RequestBody ChangePasswordDTO changePasswordDTO
    ) {
        User user = AuthValidationService.validateAuthUser(tokenRepository, auth);
        authService.changePassword(user, changePasswordDTO);
    }

    @Tag(name = "User", description = "Logout current user")
    public @GetMapping(
            value = "/logout",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    void logout(@RequestHeader(HttpHeaders.AUTHORIZATION) String auth) {
        authService.logout(auth);
    }
}

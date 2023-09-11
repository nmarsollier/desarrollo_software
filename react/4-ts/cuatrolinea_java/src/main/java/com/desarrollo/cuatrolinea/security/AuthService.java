package com.desarrollo.cuatrolinea.security;

import com.desarrollo.cuatrolinea.security.model.*;
import com.desarrollo.cuatrolinea.utilities.ShaEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;

import java.util.Objects;

@Service
public class AuthService {
    @Autowired
    UserRepository userRepository;

    @Autowired
    TokenRepository tokenRepository;

    public TokenDTO register(RegisterUserDTO registerUserDTO) {
        if (registerUserDTO.userName.isBlank()) {
            throw new HttpClientErrorException(HttpStatusCode.valueOf(404), "Invalid username");
        }
        if (registerUserDTO.password.isBlank()) {
            throw new HttpClientErrorException(HttpStatusCode.valueOf(404), "Invalid password");
        }

        User user = userRepository.save(new User(
                registerUserDTO.userName,
                ShaEncoder.encode(registerUserDTO.password)
        ));

        Token token = tokenRepository.save(new Token(user));

        TokenDTO result = new TokenDTO();
        result.token = token.id;
        return result;
    }

    public UserDTO currentUser(User user) {
        return new UserDTO(user);
    }

    TokenDTO login(RegisterUserDTO registerUserDTO) {
        User user = Objects.requireNonNull(userRepository.findItemByName(registerUserDTO.userName));

        if (!ShaEncoder.encode(registerUserDTO.password).equals(user.password)) {
            throw new HttpClientErrorException(HttpStatusCode.valueOf(404), "Invalid password");
        }

        Token token = tokenRepository.save(new Token(user));

        TokenDTO result = new TokenDTO();
        result.token = token.id;
        return result;
    }

    void changePassword(User user, ChangePasswordDTO changePasswordDTO) {
        if (!ShaEncoder.encode(changePasswordDTO.currentPassword).equals(user.password)) {
            throw new HttpClientErrorException(HttpStatusCode.valueOf(404), "Invalid password");
        }

        if (changePasswordDTO.newPassword.isBlank()) {
            throw new HttpClientErrorException(HttpStatusCode.valueOf(404), "Invalid password");
        }

        user.password = ShaEncoder.encode(changePasswordDTO.newPassword);
        userRepository.save(user);
    }

    void logout(String authHeader) {
        Token token = tokenRepository.findById(authHeader.substring(7)).orElseThrow();
        token.status = RecordStatus.INACTIVE;
        tokenRepository.save(token);
    }
}

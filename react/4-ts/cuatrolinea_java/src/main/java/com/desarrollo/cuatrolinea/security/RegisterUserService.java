package com.desarrollo.cuatrolinea.security;

import com.desarrollo.cuatrolinea.security.model.*;
import com.desarrollo.cuatrolinea.utilities.ShaEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;

import java.util.Objects;

@Service
public class RegisterUserService {
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
}

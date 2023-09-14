package com.desarrollo.cuatrolinea.security;

import com.desarrollo.cuatrolinea.security.model.*;
import com.desarrollo.cuatrolinea.utilities.ShaEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;

import java.util.Objects;

@Service
public class LoginService {
    @Autowired
    UserRepository userRepository;

    @Autowired
    TokenRepository tokenRepository;

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
}

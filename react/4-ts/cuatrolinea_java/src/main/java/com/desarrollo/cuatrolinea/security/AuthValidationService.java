package com.desarrollo.cuatrolinea.security;

import com.desarrollo.cuatrolinea.security.model.RecordStatus;
import com.desarrollo.cuatrolinea.security.model.Token;
import com.desarrollo.cuatrolinea.security.model.TokenRepository;
import com.desarrollo.cuatrolinea.security.model.User;
import org.springframework.http.HttpStatusCode;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;

import java.util.Objects;

@Service
public class AuthValidationService {
    public static Token validateAuth(TokenRepository tokenRepository, String authHeader) {
        Token token = tokenRepository.findById(authHeader.substring(7)).orElseThrow(
                () -> new HttpClientErrorException(HttpStatusCode.valueOf(401), "Invalid session")
        );
        if (token.status != RecordStatus.ACTIVE) {
            throw new HttpClientErrorException(HttpStatusCode.valueOf(404), "Invalid password");
        }
        return token;
    }

    public static User validateAuthUser(TokenRepository tokenRepository, String authHeader) {
        Token token = AuthValidationService.validateAuth(tokenRepository, authHeader);

        return Objects.requireNonNull(token.getUser());
    }
}

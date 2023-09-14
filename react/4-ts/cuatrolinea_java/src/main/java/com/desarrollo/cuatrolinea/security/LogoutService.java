package com.desarrollo.cuatrolinea.security;

import com.desarrollo.cuatrolinea.security.model.RecordStatus;
import com.desarrollo.cuatrolinea.security.model.Token;
import com.desarrollo.cuatrolinea.security.model.TokenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LogoutService {

    @Autowired
    TokenRepository tokenRepository;

    void logout(String authHeader) {
        Token token = tokenRepository.findById(authHeader.substring(7)).orElseThrow();
        token.status = RecordStatus.INACTIVE;
        tokenRepository.save(token);
    }
}

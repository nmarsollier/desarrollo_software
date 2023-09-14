package com.desarrollo.cuatrolinea.security;

import com.desarrollo.cuatrolinea.security.model.ChangePasswordDTO;
import com.desarrollo.cuatrolinea.security.model.User;
import com.desarrollo.cuatrolinea.security.model.UserRepository;
import com.desarrollo.cuatrolinea.utilities.ShaEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;

@Service
public class ChangePasswordService {
    @Autowired
    UserRepository userRepository;

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
}

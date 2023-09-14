package com.desarrollo.cuatrolinea.security;

import com.desarrollo.cuatrolinea.security.model.User;
import com.desarrollo.cuatrolinea.security.model.UserDTO;
import org.springframework.stereotype.Service;

@Service
public class GetCurrentUserService {
    public UserDTO currentUser(User user) {
        return new UserDTO(user);
    }
}

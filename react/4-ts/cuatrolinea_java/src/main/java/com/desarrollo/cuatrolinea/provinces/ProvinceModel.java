package com.desarrollo.cuatrolinea.provinces;

import com.desarrollo.cuatrolinea.provinces.model.NewProvinceDTO;
import com.desarrollo.cuatrolinea.provinces.model.ProvinceDTO;
import com.desarrollo.cuatrolinea.security.AuthValidationService;
import com.desarrollo.cuatrolinea.security.model.TokenRepository;
import com.desarrollo.cuatrolinea.security.model.User;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "/province")
public class ProvinceModel {
    @Autowired
    ProvinceService provinceService;

    @Autowired
    TokenRepository tokenRepository;

    @Tag(name = "Provinces", description = "List all provinces")
    @GetMapping(
            value = "/list",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public List<ProvinceDTO> list(@RequestHeader(HttpHeaders.AUTHORIZATION) String auth) {
        User user = AuthValidationService.validateAuthUser(tokenRepository, auth);

        return provinceService.list(user);
    }

    @Tag(name = "Provinces", description = "Create new Province")
    @PostMapping(
            value = "/new",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public void create(
            @RequestHeader(HttpHeaders.AUTHORIZATION) String auth,
            @RequestBody NewProvinceDTO newProvinceDTO
    ) {
        AuthValidationService.validateAuthUser(tokenRepository, auth);

        provinceService.create(newProvinceDTO);
    }
}

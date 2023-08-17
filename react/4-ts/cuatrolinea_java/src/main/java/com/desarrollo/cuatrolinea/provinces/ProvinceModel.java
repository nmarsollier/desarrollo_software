package com.desarrollo.cuatrolinea.provinces;

import com.desarrollo.cuatrolinea.provinces.model.Province;
import com.desarrollo.cuatrolinea.provinces.model.ProvinceRepository;
import com.desarrollo.cuatrolinea.provinces.pojo.NewProvinceData;
import com.desarrollo.cuatrolinea.provinces.pojo.ProvinceDTO;
import com.desarrollo.cuatrolinea.security.AuthValidation;
import com.desarrollo.cuatrolinea.security.model.TokenRepository;
import com.desarrollo.cuatrolinea.security.model.UserRepository;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.StreamSupport;

@CrossOrigin
@RestController
@RequestMapping(value = "/province")
public class ProvinceModel {
    @Autowired
    UserRepository userRepository;

    @Autowired
    TokenRepository tokenRepository;

    @Autowired
    ProvinceRepository provinceRepository;


    @Tag(name = "Provinces", description = "List all provinces")
    @GetMapping(
            value = "/list",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public List<ProvinceDTO> list(@RequestHeader(HttpHeaders.AUTHORIZATION) String auth) {
        AuthValidation.validateAuthUser(tokenRepository, auth);

        return StreamSupport.stream(provinceRepository.findAll().spliterator(), false)
                .map(ProvinceDTO::new).toList();
    }

    @Tag(name = "Provinces", description = "Create new Province")
    @PostMapping(
            value = "/new",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public void create(
            @RequestHeader(HttpHeaders.AUTHORIZATION) String auth,
            @RequestBody NewProvinceData newProvinceData
    ) {
        AuthValidation.validateAuthUser(tokenRepository, auth);

        provinceRepository.save(new Province(newProvinceData.name));
    }
}

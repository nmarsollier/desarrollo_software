package com.desarrollo.cuatrolinea.provinces;

import com.desarrollo.cuatrolinea.provinces.model.ProvinceDTO;
import com.desarrollo.cuatrolinea.provinces.model.ProvinceRepository;
import com.desarrollo.cuatrolinea.security.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.StreamSupport;

@Service
public class ListProvinceService {

    @Autowired
    ProvinceRepository provinceRepository;


    public List<ProvinceDTO> list(User user) {
        return StreamSupport.stream(provinceRepository.findAll().spliterator(), false)
                .map(ProvinceDTO::new).toList();
    }
}

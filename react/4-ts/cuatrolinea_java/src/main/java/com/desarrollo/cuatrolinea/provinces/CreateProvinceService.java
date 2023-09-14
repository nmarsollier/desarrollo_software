package com.desarrollo.cuatrolinea.provinces;

import com.desarrollo.cuatrolinea.provinces.model.NewProvinceDTO;
import com.desarrollo.cuatrolinea.provinces.model.Province;
import com.desarrollo.cuatrolinea.provinces.model.ProvinceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CreateProvinceService {

    @Autowired
    ProvinceRepository provinceRepository;

    public void create(NewProvinceDTO newProvinceDTO) {
        provinceRepository.save(new Province(newProvinceDTO.name));
    }
}

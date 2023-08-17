package com.desarrollo.cuatrolinea.utilities;

import com.google.common.hash.Hashing;

import java.nio.charset.StandardCharsets;

public class ShaEncoder {
    public static String encode(String originalString) {
        return Hashing.sha256()
                .hashString(originalString, StandardCharsets.UTF_8)
                .toString();
    }
}

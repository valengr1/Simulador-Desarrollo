package dev.fabbrickapi.controllers;

import dev.fabbrickapi.models.MaterialTextil;
import dev.fabbrickapi.services.ServicioMaterialTextil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("http://127.0.0.1:5173")
public class ControladorMaterialTextil {
    ServicioMaterialTextil servicioMaterialTextil;

    @Autowired
    public ControladorMaterialTextil(ServicioMaterialTextil servicioMaterialTextil) {
        this.servicioMaterialTextil = servicioMaterialTextil;
    }

    @GetMapping("/api/telas/")
    public List<MaterialTextil> listar() {
        return servicioMaterialTextil.listar();
    }
}

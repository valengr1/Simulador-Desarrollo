package dev.fabbrickapi.services;

import dev.fabbrickapi.models.MaterialTextil;
import dev.fabbrickapi.repositories.RepositorioMaterialTextil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServicioMaterialTextil {
    RepositorioMaterialTextil repositorioMaterialTextil;

    @Autowired
    public ServicioMaterialTextil(RepositorioMaterialTextil repositorioMaterialTextil) {
        this.repositorioMaterialTextil = repositorioMaterialTextil;
    }

    public List<MaterialTextil> listar() {
        return repositorioMaterialTextil.findAll();
    }
}

package dev.fabbrickapi.controllers;

import dev.fabbrickapi.models.Simulacion;
import dev.fabbrickapi.services.ServicioSimulacion;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController @CrossOrigin("http://localhost:5173")
public class ControladorSimulacion {
    ServicioSimulacion servicioSimulacion;
    @Autowired
    public ControladorSimulacion(ServicioSimulacion servicioSimulacion){
        this.servicioSimulacion = servicioSimulacion;
    }


    @GetMapping("/api/simulaciones/")
    public List<Simulacion> listar(){
        return servicioSimulacion.listar();
    }

    @GetMapping("/api/simulaciones/lastOne")
    public Simulacion listarUltimaSimulacion(){
        return servicioSimulacion.listarUltimaSimulacion();
    }

    @PostMapping("/api/simulaciones/")
    public ResponseEntity<?> simular(@RequestBody Simulacion simulacion){
        return servicioSimulacion.simular(simulacion);
    }
}

package dev.fabbrickapi.services;

import dev.fabbrickapi.models.Simulacion;
import dev.fabbrickapi.repositories.RepositorioSimulacion;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ServicioSimulacion {
    RepositorioSimulacion repositorioSimulacion;

    @Autowired
    public ServicioSimulacion(RepositorioSimulacion repositorioSimulacion) {
        this.repositorioSimulacion = repositorioSimulacion;
    }

    public ResponseEntity<?> simular(Simulacion simulacion) {
        String tipoTela = simulacion.getTipoTela();
        Double cantidadTela = simulacion.getCantidadMateriaTextil();
        Double cantidadPegamento = simulacion.getCantidadPegamento();
        if (cantidadTela == null || cantidadPegamento == null || tipoTela.isBlank()) {
            return new ResponseEntity<>("Datos insuficientes", HttpStatus.BAD_REQUEST);
        } else {
            LocalDateTime fecha = LocalDateTime.now();
            System.out.println("Datos: " + tipoTela + " " + cantidadTela + " " + cantidadPegamento);
            Simulacion s = new Simulacion();
            Simulacion s1 = s.simular(tipoTela);
            s1.setCantidadMateriaTextil(cantidadTela);
            s1.setCantidadPegamento(cantidadPegamento);
            s1.setTipoTela(tipoTela);
            s1.setFecha(fecha);
            repositorioSimulacion.save(s1);
            return new ResponseEntity<>(s1, HttpStatus.OK);

        }
    }

    public List<Simulacion> listar() {
        return repositorioSimulacion.listarSimulacionesOrdenadas();
    }

    public Simulacion listarUltimaSimulacion() {
        return repositorioSimulacion.listarUltimaSimulacion();
    }
}

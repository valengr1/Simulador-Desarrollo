package dev.fabbrickapi.repositories;

import dev.fabbrickapi.models.Simulacion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RepositorioSimulacion extends JpaRepository<Simulacion, Long> {
    @Query("SELECT s FROM Simulacion s WHERE s.id = (SELECT MAX(s2.id) FROM Simulacion s2)")
    public Simulacion listarUltimaSimulacion();

    @Query("SELECT s FROM Simulacion s order by s.id")
    public List<Simulacion> listarSimulacionesOrdenadas();

}

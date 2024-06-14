package dev.fabbrickapi.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Entity  @ToString
public class MaterialTextil {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) @Getter @Setter
    private Long id;

    @Getter @Setter
    private String descripcion;


}

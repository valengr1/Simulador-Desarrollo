package dev.fabbrickapi.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.apache.commons.math3.distribution.NormalDistribution;

import java.time.LocalDateTime;

@Entity
@ToString
@Getter
@Setter
public class Simulacion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;
    @Column
    private LocalDateTime fecha;

    @Column
    private String tipoTela;

    @Column
    private Double cantidadPegamento;

    @Column
    private Double cantidadMateriaTextil;

    @Column
    private Double tiempoMezcla;

    @Column
    private Integer cantidadLadrillosProducidos;
    @Column
    private int cantidadLadrillosAltaCalidad;

    @Column
    private int cantidadLadrillosReprocesar;

    @Column
    private int cantidadLadrillosConsistenciaDebil;
    @Column
    private int cantidadLadrillosConsistenciaSemiFuerte;
    @Column
    private int cantidadLadrillosConsistenciaFuerte;
    @Column
    private int cantidadLadrillosResistenciaFuegoAlta;
    @Column
    private int cantidadLadrillosResistenciaFuegoMedia;
    @Column
    private int cantidadLadrillosResistenciaFuegoBaja;
    @Column
    private int cantidadLadrillosResistenciaHumedadAlta;
    @Column
    private int cantidadLadrillosResistenciaHumedadMedia;
    @Column
    private int cantidadLadrillosResistenciaHumedadBaja;
    @Column
    private String mensajeInformativo;
    @Column
    private Double tiempoSecado;


    public Simulacion simular(String tipoTela) {
        if (tipoTela.equals("Lino") || tipoTela.equals("Nylon") || tipoTela.equals("Jean")) {
            Simulacion simulacion = new Simulacion();
            int ladrillos = 0;
            int L = 0;
            double TM = 0.0;
            int CF = 0, CS = 0, CD = 0, RFA = 0, RFM = 0, RFB = 0, RHA = 0, RHB = 0, RHM = 0;
            double TS = 0.0;
            boolean fuerte = false;
            boolean altaF = false;
            boolean altaH = false;
            int AC = 0, LR = 0;
            double probabilidadConsistenciaFuerte = 0.0;
            double probabilidadConsistenciaSemifuerte = 0.0;

            double probabilidadResistenciaFuegoAlta = 0.0;
            double probabilidadResistenciaFuegoMedia = 0.0;

            double probabilidadResistenciaHumedadAlta = 0.0;
            double probabilidadResistenciaHumedadMedia = 0.0;

            L = (int) new NormalDistribution(40, 5).sample();
            System.out.println("Cantidad de ladrillos: " + L);
            TM = new NormalDistribution(60, 15).sample();
            System.out.println("Tiempo de mezcla: " + TM);
            switch (tipoTela) {
                case "Jean":
                    probabilidadConsistenciaFuerte = 0.7;
                    probabilidadConsistenciaSemifuerte = 0.9;

                    probabilidadResistenciaFuegoAlta = 0.85;
                    probabilidadResistenciaFuegoMedia = 0.95;

                    probabilidadResistenciaHumedadAlta = 0.8;
                    probabilidadResistenciaHumedadMedia = 0.95;
                    break;
                case "Lino":
                    probabilidadConsistenciaFuerte = 0.6;
                    probabilidadConsistenciaSemifuerte = 0.95;

                    probabilidadResistenciaFuegoAlta = 0.7;
                    probabilidadResistenciaFuegoMedia = 0.9;

                    probabilidadResistenciaHumedadAlta = 0.85;
                    probabilidadResistenciaHumedadMedia = 0.95;
                    break;
                case "Nylon":
                    probabilidadConsistenciaFuerte = 0.65;
                    probabilidadConsistenciaSemifuerte = 0.85;

                    probabilidadResistenciaFuegoAlta = 0.8;
                    probabilidadResistenciaFuegoMedia = 0.95;

                    probabilidadResistenciaHumedadAlta = 0.7;
                    probabilidadResistenciaHumedadMedia = 0.9;
                    break;
            }
            while (ladrillos < L) {
                double r1 = generarNumeroRandom();
                if (r1 <= probabilidadConsistenciaFuerte) {
                    CF++;
                    fuerte = true;
                } else if (r1 <= probabilidadConsistenciaSemifuerte) {
                    CS++;

                } else {
                    CD++;
                    fuerte = false;
                }

                double r2 = generarNumeroRandom();
                if (r2 <= probabilidadResistenciaFuegoAlta) {
                    RFA++;
                    altaF = true;
                } else if (r2 <= probabilidadResistenciaFuegoMedia) {
                    RFM++;

                } else {
                    RFB++;
                    altaF = false;
                }

                double r3 = generarNumeroRandom();
                if (r3 <= probabilidadResistenciaHumedadAlta) {
                    RHA++;
                    altaH = true;
                } else if (r3 <= probabilidadResistenciaHumedadMedia) {
                    RHM++;

                } else {
                    RHB++;
                    altaH = false;
                }

                if (fuerte && altaF && altaH) {
                    AC++;
                } else {
                    LR++;
                }
                double r4 = generarNumeroRandom();
                TS = 10 + 5 * r4;
                simulacion.setTiempoSecado(TS);
                ladrillos++;
            }
            if (LR > AC) {
                simulacion.setMensajeInformativo("Se deben ajustar las proporciones");
                System.out.println("Se deben ajustar las proporciones");
            } else {
                simulacion.setMensajeInformativo("Proporciones correctas");
                System.out.println("Proporciones correctas");
            }
            System.out.println("Cantidad de ladrillos producidos: " + L);
            System.out.println("Tiempo de secado: "+tiempoSecado);
            System.out.println("Cantidad de ladrillos de alta calidad: " + AC);
            System.out.println("Cantidad de ladrillos a reprocesar: " + LR);
            System.out.println("Cantidad de ladrillos con consistencia debil: " + CD);
            System.out.println("Cantidad de ladrillos con consistencia semifuerte: " + CS);
            System.out.println("Cantidad de ladrillos con consistencia fuerte: " + CF);
            System.out.println("Cantidad de ladrillos con resistencia al fuego alta: " + RFA);
            System.out.println("Cantidad de ladrillos con resistencia al fuego media: " + RFM);
            System.out.println("Cantidad de ladrillos con resistencia al fuego baja: " + RFB);
            System.out.println("Cantidad de ladrillos con resistencia a la humedad alta: " + RHA);
            System.out.println("Cantidad de ladrillos con resistencia a la humedad media: " + RHM);
            System.out.println("Cantidad de ladrillos con resistencia a la humedad baja: " + RHB);

            simulacion.setCantidadLadrillosProducidos(L);
            simulacion.setCantidadLadrillosAltaCalidad(AC);
            simulacion.setCantidadLadrillosReprocesar(LR);
            simulacion.setCantidadLadrillosConsistenciaDebil(CD);
            simulacion.setCantidadLadrillosConsistenciaSemiFuerte(CS);
            simulacion.setCantidadLadrillosConsistenciaFuerte(CF);
            simulacion.setCantidadLadrillosResistenciaFuegoAlta(RFA);
            simulacion.setCantidadLadrillosResistenciaFuegoMedia(RFM);
            simulacion.setCantidadLadrillosResistenciaFuegoBaja(RFB);
            simulacion.setCantidadLadrillosResistenciaHumedadAlta(RHA);
            simulacion.setCantidadLadrillosResistenciaHumedadMedia(RHM);
            simulacion.setCantidadLadrillosResistenciaHumedadBaja(RHB);
            simulacion.setTiempoMezcla(TM);
            return simulacion;
        } else {
            return null;
        }
    }

    public Double generarNumeroRandom() {
        Double semilla = Math.random(); //n
        int constanteMultiplicativa = 4309; //a
        int constanteAditiva = 2311; //c
        Double modulo = 6031.0; //m
        int cantidadNumerosAGenerar = 1;
        int i = 0;
        Double semillaSiguiente;
        Double numeroAleatorio = 0.0;

        while (i < cantidadNumerosAGenerar) {
            semillaSiguiente = (constanteMultiplicativa * semilla + constanteAditiva) % modulo;
            numeroAleatorio = semillaSiguiente / modulo;
            semilla = semillaSiguiente;
            i++;
        }
        return numeroAleatorio;
    }
}

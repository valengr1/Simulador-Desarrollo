package dev.fabbrickapi;

import dev.fabbrickapi.models.Simulacion;
import org.apache.commons.math3.distribution.NormalDistribution;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FabbrickApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(FabbrickApiApplication.class, args);
//		Simulacion s = new Simulacion();
//		s.simular("lino");
	}

}

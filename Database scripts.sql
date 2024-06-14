INSERT INTO public.ladrillo(
	 cantidad_pegamento, cantidad_tela, consistencia, resistencia_fuego, resistencia_humedad, tiempo_secado, tipo_tela_id)
	VALUES (120.0, 100.0, 'FUERTE', 'ALTO', 'MEDIO', 14, 1);
	
SELECT * FROM ladrillo;
SELECT * FROM simulacion;

INSERT into simulacion (produccion, fecha, ladrillo_id) values (20.0,'2011-01-01 00:00:00',4);

SELECT fecha,produccion AS "Kg de ladrillo",cantidad_pegamento AS "Gramos de pegamento",cantidad_tela AS "Kg de tela",consistencia,resistencia_fuego,resistencia_humedad,tiempo_secado AS "Horas de secado",material_textil.descripcion AS "Tipo de tela" FROM simulacion 
INNER JOIN ladrillo ON ladrillo.id = simulacion.ladrillo_id
INNER JOIN material_textil ON ladrillo.tipo_tela_id = material_textil.id;
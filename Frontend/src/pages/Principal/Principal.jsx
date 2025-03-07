import BarraNavegacion from "../../components/BarraNavegacion/BarraNavegacion";
import styles from "../Principal/Principal.module.css";
import AreaChart from "../../components/Grafico/AreaChart";
import { useEffect, useState } from "react";
import axios from "axios";
import { Fade, Zoom } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";
function Principal() {

  const [simulaciones, setSimulaciones] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const obtenerSimulaciones = () => {
      axios
        .get("http://localhost:8080/api/simulaciones/")
        .then((res) => {
          setSimulaciones(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    obtenerSimulaciones();
  }, []);

  var producidosVsAltaCalidad = [];
  simulaciones.forEach((element) => {
    let producidoVsAltaCalidad = {
      id: element.id,
      Total: Number(element.cantidadLadrillosProducidos),
      AltaCalidad: Number(element.cantidadLadrillosAltaCalidad),
    };
    producidosVsAltaCalidad.push(producidoVsAltaCalidad);
  });

  return (
    <div className={styles.divPrincipal}>
      <BarraNavegacion />
      <div className={styles.divExterno}>
        <div className={styles.divFrase}>
          <h2><Fade cascade duration={150} delay={100}>Producciones</Fade></h2>
        </div>

        <div className={styles.divExtGraficas}>
          <Zoom delay={50} duration={700}>
            <div
              className={styles.divAreaChart}>
              <AreaChart producidosVsAltaCalidad={producidosVsAltaCalidad} />
            </div>
          </Zoom>
        </div>
        <a className={styles.btnSimular} onClick={() => { navigate("/simular") }}>
          Simular
        </a>
      </div>
    </div>
  );
}

export default Principal;

import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import styles from "../Formulario/Formulario.module.css";
import BarraNavegacion from "../../components/BarraNavegacion/BarraNavegacion";
import { Fade, Zoom } from "react-awesome-reveal";
import toast, { Toaster } from "react-hot-toast";

function Formulario() {
  const [tiposTela, setTiposTela] = useState([]);
  const [cantidadPegamentoEcologico, setCantidadPegamentoEcologico] = useState(0);
  const [cantidadMateriaTextil, setCantidadMateriaTextil] = useState(0);
  const [tipoTela, setTipoTela] = useState("");
  const [rangoCantidadPegamento, setRangoCantidadPegamento] = useState(0);
  const [ultimaSimulacion, setUltimaSimulacion] = useState(null);
  const [seSimulo, setSeSimulo] = useState(false);

  useEffect(() => {
    const getTiposTela = () => {
      axios.get("http://localhost:8080/api/telas/").then((res) => {
        setTiposTela(res.data);
      });
    };
    getTiposTela();
    setCantidadPegamentoEcologico(0)
    getRangoCantidadPegamento();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cantidadMateriaTextil, tipoTela]);

  const simular = (e) => {
    if (cantidadMateriaTextil == 0 || cantidadPegamentoEcologico == 0 || tipoTela === "") {
      e.preventDefault();
      toast.error("Por favor llene todos los campos", { id: "error", duration: 2000, delay: 500, position: "top-right" });
    } else {
      e.preventDefault();
      if (seSimulo) {
        toast.error("Ya se realizó una simulación, por favor recargue la página");
      } else {
        const cantidadTela = e.target.cantidadMateriaTextil.value;
        const descripcion = e.target.tiposTela.value;
        const cantidadPegamento = cantidadPegamentoEcologico;
        var simulacion = { cantidadMateriaTextil: cantidadTela, cantidadPegamento: cantidadPegamento, tipoTela: descripcion };
        var datosUltimaSimulacion;
        console.log(simulacion);
        axios.post("http://localhost:8080/api/simulaciones/", simulacion).then(() => {
          toast.success("Simulación realizada con éxito", { id: "exito", duration: 2000, delay: 500, position: "top-right" });
          axios.get("http://localhost:8080/api/simulaciones/lastOne").then((res) => {
            datosUltimaSimulacion = res.data;
          });
        });


        setTimeout(() => {
          setSeSimulo(true);
          setUltimaSimulacion(datosUltimaSimulacion);
          if (datosUltimaSimulacion.mensajeInformativo === "Proporciones correctas") {
            toast.success(datosUltimaSimulacion.mensajeInformativo, { id: "exito", duration: 2500, delay: 2500, position: "top-right" });
          } else {
            toast.error(datosUltimaSimulacion.mensajeInformativo, { id: "error", duration: 2500, position: "top-right" });
          }
          e.target.cantidadMateriaTextil.value = "";
          e.target.tiposTela.value = "";
          setTipoTela("");
          setCantidadPegamentoEcologico(0);
          setCantidadMateriaTextil(0);
        }, 2500);
      }
    }
  }

  const getRangoCantidadPegamento = () => {
    if (tipoTela === "Jean") {
      setRangoCantidadPegamento((1 / 2) * cantidadMateriaTextil);
    } else if (tipoTela === "Lino") {
      setRangoCantidadPegamento((1 / 3) * cantidadMateriaTextil);
    } else if (tipoTela === "Nylon") {
      setRangoCantidadPegamento((1 / 4) * cantidadMateriaTextil);
    } else {
      setRangoCantidadPegamento(0);
    }
  }

  let tiempo, horasSecado;
  if (ultimaSimulacion) {
    horasSecado = ultimaSimulacion.tiempoSecado.toFixed() + " horas";
    tiempo = ultimaSimulacion.tiempoMezcla.toFixed() + " minutos";
  }

  const volverASimular = () => {
    setSeSimulo(false);
    setUltimaSimulacion(null);
  }

  return (
    <div
      className={styles.principal} >
      <Toaster position="bottom-right" />
      <BarraNavegacion />
      <div className={styles.divExterno1}>
        <div className={styles.divExterno2} style={ultimaSimulacion ? ({ marginTop: "20px" }) : ({ height: "92vh", marginTop: "20px" })}>
          <div className={styles.simulador}>
            {seSimulo ? (<></>) : (
              <form onSubmit={simular}>
                <div className={styles.divFormExterno}>
                  <Zoom delay={300} duration={500}>
                    <h2><Fade cascade duration={100} delay={100}>Producción de ladrillos</Fade></h2>
                    <div className={styles.divLabelInput}>
                      <label htmlFor="">Tipo de tela</label>
                      <select onChange={
                        (e) => {
                          setTipoTela(e.target.value);
                          getRangoCantidadPegamento();

                        }
                      } name="tiposTela" id="tiposTela">
                        <option value="">Seleccione</option>
                        {tiposTela.map((tipoTela) => (
                          <option key={tipoTela.id} value={tipoTela.descripcion}>
                            {tipoTela.descripcion}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className={styles.divLabelInput}>
                      <label htmlFor="cantidadMateriaTextil">
                        Materia textil (kg)
                      </label>
                      <div className={styles.divCantidadEInput}>
                        <input
                          id="cantidadMateriaTextil"
                          type="range"
                          min={1}
                          max={10}
                          placeholder="Kg"
                          step={0.1}
                          value={cantidadMateriaTextil}
                          onChange={(e) => {
                            setCantidadMateriaTextil(e.target.value)
                          }}
                        />
                        <h4>{cantidadMateriaTextil}</h4>
                      </div>
                    </div>
                    <div className={styles.divLabelInput}>
                      <label htmlFor="pegamentoEcologico">
                        Pegamento ecológico (litros)
                      </label>
                      <div className={styles.divCantidadEInput}>
                        <input
                          id="pegamentoEcologico"
                          type="range"
                          min={0}
                          max={rangoCantidadPegamento}
                          step={0.1}
                          placeholder="Litros"
                          value={cantidadPegamentoEcologico}
                          onChange={(e) => setCantidadPegamentoEcologico(e.target.value)}
                        />
                        <h4>{cantidadPegamentoEcologico}</h4>
                      </div>
                    </div>
                    <button>Simular</button>
                  </Zoom>
                </div>
              </form>
            )}
            {ultimaSimulacion ? <section>
              <div className={styles.cuadroResultados}>
                <div className={styles.cuadroResultadosInner}>
                  <h2><Fade cascade duration={150} delay={100}>Resultados</Fade></h2>
                  <h4 className={styles.mensajeInformativo}>{ultimaSimulacion.mensajeInformativo}</h4>
                  <h4 className={styles.tiempoSecado}>Tipo de tela utilizada: {ultimaSimulacion.tipoTela}</h4>
                  <h4 className={styles.tiempoSecado}>Cantidad de materia textil: {ultimaSimulacion.cantidadMateriaTextil} kg</h4>
                  <h4 className={styles.tiempoSecado}>Cantidad de pegamento ecológico: {ultimaSimulacion.cantidadPegamento} litros</h4>
                  <h4 className={styles.tiempoSecado}>Tiempo de secado: {horasSecado}</h4>

                  <Zoom cascade delay={50} duration={500}>
                    <div className={styles.cuadroResultadosInner2}>

                      <div className={styles.resultado}>
                        <h5>Ladrillos producidos</h5>
                        <h4>{ultimaSimulacion.cantidadLadrillosProducidos}</h4>
                      </div>
                      <div className={styles.resultado}>
                        <h5>Ladrillos de alta calidad</h5>
                        <h4>{ultimaSimulacion.cantidadLadrillosAltaCalidad}</h4>
                      </div>
                    </div>
                  </Zoom>
                  <Zoom cascade delay={200} duration={500}>

                    <div className={styles.cuadroResultadosInner2}>
                      <div className={styles.resultado}>
                        <h5>Tiempo de mezcla</h5>
                        <h4>{tiempo}</h4>
                      </div>
                      <div className={styles.resultado}>
                        <h5>Cantidad de ladrrilos a reprocesar</h5>
                        <h4>{ultimaSimulacion.cantidadLadrillosReprocesar}</h4>
                      </div>
                    </div>
                  </Zoom>
                  <Zoom cascade delay={400} duration={500}>

                    <div className={styles.cuadroResultadosInner2}>
                      <div className={styles.resultado}>
                        <h5>Fuertes</h5>
                        <h4>{ultimaSimulacion.cantidadLadrillosConsistenciaFuerte}</h4>
                      </div>
                      <div className={styles.resultado}>
                        <h5>Semifuertes</h5>
                        <h4>{ultimaSimulacion.cantidadLadrillosConsistenciaSemiFuerte}</h4>
                      </div>
                      <div className={styles.resultado}>
                        <h5>Débiles</h5>
                        <h4>{ultimaSimulacion.cantidadLadrillosConsistenciaDebil}</h4>
                      </div>
                    </div>
                  </Zoom>
                  <Zoom cascade delay={600} duration={500}>

                    <div className={styles.cuadroResultadosInner2}>
                      <div className={styles.resultado}>
                        <h5>Alta resistencia a la humedad</h5>
                        <h4>{ultimaSimulacion.cantidadLadrillosResistenciaHumedadAlta}</h4>
                      </div>
                      <div className={styles.resultado}>
                        <h5>Resistencia a la humedad media</h5>
                        <h4>{ultimaSimulacion.cantidadLadrillosResistenciaHumedadMedia}</h4>
                      </div>
                      <div className={styles.resultado}>
                        <h5>Baja resistencia a la humedad</h5>
                        <h4>{ultimaSimulacion.cantidadLadrillosResistenciaHumedadBaja}</h4>
                      </div>
                    </div>
                  </Zoom>
                  <Zoom cascade delay={200} duration={500}>

                    <div className={styles.cuadroResultadosInner2}>
                      <div className={styles.resultado}>
                        <h5>Alta resistencia al fuego</h5>
                        <h4>{ultimaSimulacion.cantidadLadrillosResistenciaFuegoAlta}</h4>
                      </div>
                      <div className={styles.resultado}>
                        <h5>Resistencia al fuego media</h5>
                        <h4>{ultimaSimulacion.cantidadLadrillosResistenciaFuegoMedia}</h4>
                      </div>
                      <div className={styles.resultado}>
                        <h5>Baja resistencia al fuego</h5>
                        <h4>{ultimaSimulacion.cantidadLadrillosResistenciaFuegoBaja}</h4>
                      </div>
                    </div>
                  </Zoom>
                </div>
                <button onClick={volverASimular} className={styles.buttonVolverASimular}>Simular nuevamente</button>
              </div>
            </section>
              : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Formulario;

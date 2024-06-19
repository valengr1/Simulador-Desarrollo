/* eslint-disable react/no-unescaped-entities */
import { Zoom } from "react-awesome-reveal"
import BarraNavegacion from "../../components/BarraNavegacion/BarraNavegacion"
import styles from "./Instrucciones.module.css"
function Instrucciones() {
    return (
        <>
            <BarraNavegacion />



            <div className={styles.divInstrucciones}>
                <div className={styles.card}>
                    <Zoom delay={300} duration={500}>
                        <h2>¿Qué simulamos?</h2>
                        <p>Simulamos el proceso de producción de un lote de ladrillos ecológicos a base de material textil y pegamento ecológico.</p>
                        <h4>¿Cuáles son los pasos del proceso de producción?</h4>
                        <div>

                            <p>Los pasos del proceso de producción son los siguientes:</p>
                            <ol>
                                <li>1. Se selecciona el tipo de tela de ropa que se empleará en el proceso de producción (Jean, Lino o Nylon).</li>
                                <li>2. Se selecciona la cantidad de tela de ropa triturada que se empleará en el proceso de producción.</li>
                                <li>3. Se selecciona la cantidad de pegamento ecológico que se empleará en el proceso de producción.</li>
                                <li>4. Se realiza una mezcla a mano uniendo la materia textil con el pegamento ecológico.</li>
                                <li>5. Se coloca la mezcla en una máquina que unifica y amolda los ladrillos.</li>
                                <li>6. Se retira el molde de ladrillos de la máquina.</li>
                                <li>7. Se desmolda y se deja secar los ladrillos al aire libre.</li>

                            </ol>
                        </div>
                    </Zoom>
                </div>
                <div className={styles.card}>
                    <Zoom delay={300} duration={500}>

                        <h2>¿Qué datos introducimos?</h2>
                        <h4>Tipo de tela</h4>
                        <p>Es el tipo de tela de ropa que se empleará en el proceso de producción (Jean, Lino o Nylon)</p>
                        <h4>Material textil (kg)</h4>
                        <p>Es la cantidad de tela de ropa triturada que se empleará en el proceso de producción.</p>
                        <h4>Pegamento ecológico (litros)</h4>
                        <p>Es la cantidad de pegamento ecológico que se empleará en el proceso de producción.</p>
                    </Zoom>
                </div>
                <div className={styles.card}>
                    <Zoom delay={300} duration={500}>

                        <h2>¿Cómo se genera la cantidad de horas de secado?</h2>
                        <p>La cantidad de horas de secado se genera de forma aleatoria. Puede tomar valores entre 10 y 15 horas.</p>
                    </Zoom>
                </div>
                <div className={styles.card}>
                    <Zoom delay={300} duration={500}>

                        <h2>¿Qué implica el mensaje "Proporciones correctas"?</h2>
                        <p>Se obtiene dicho mensaje cuando en la producción realizada la cantidad de ladrillos de alta calidad es mayor que la cantidad de ladrillos que deben ser reprocesados. Implica que los parámetros utilizados para la simulación (tanto los ingresados como los aleatorios) generaron un impacto positivo en la producción total.</p>
                    </Zoom>
                </div>
                <div className={styles.card}>
                    <Zoom delay={300} duration={500}>

                        <h2>¿Qué implica el mensaje "Se deben ajustar las proporciones"?</h2>
                        <p>Se obtiene dicho mensaje cuando en la producción realizada la cantidad de ladrillos que deben ser reprocesados es mayor que la cantidad de ladrillos de alta calidad. Implica que los parámetros utilizados para la simulación (tanto los ingresados como los aleatorios) generaron un impacto negativo en la producción total.</p>
                    </Zoom>
                </div>

            </div>

        </>
    )
}

export default Instrucciones
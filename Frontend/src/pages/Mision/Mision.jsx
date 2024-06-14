import { Fade } from "react-awesome-reveal"
import BarraNavegacion from "../../components/BarraNavegacion/BarraNavegacion"
import styles from "../Mision/Mision.module.css"
function Mision() {
    return (
        <div className={styles.principal}>
            <BarraNavegacion />
            <div className={styles.section}>
                <article>
                    <h1><Fade cascade duration={150} delay={100}>Nuestra misión...</Fade></h1>
                    <p>

                        Nuestra misión es brindar un simulador de vanguardia que permita a los usuarios sumergirse en el proceso de producción de ladrillos ecológicos a partir de textiles reciclados y pegamento ecológico. Nos comprometemos a ofrecer una plataforma interactiva y educativa. Buscamos proporcionar una experiencia inmersiva que permita a los usuarios experimentar y comprender de manera práctica los desafíos y las decisiones involucradas en la fabricación sostenible de ladrillos. A través de nuestro simulador, aspiramos a fomentar la conciencia y el conocimiento sobre las prácticas ecoamigables en la construcción, facilitando el aprendizaje y la innovación en este campo crucial para la protección del medio ambiente. Nuestro objetivo es inspirar a una nueva generación de profesionales y empresas a adoptar enfoques más responsables y sostenibles en la industria de la construcción, contribuyendo así a un futuro más limpio y saludable para todos.

                    </p>
                </article>
            </div>

        </div>
    )
}

export default Mision
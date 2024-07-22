import { Fade, Zoom } from "react-awesome-reveal";
import BarraNavegacion from "../../components/BarraNavegacion/BarraNavegacion";
import styles from "../Mision/Mision.module.css";
function Mision() {
  return (
    <div className={styles.principal}>
      <BarraNavegacion />
      <div className={styles.section}>
        <article className={styles.article}>
          <Zoom delay={300} duration={500}>
            <h1>
              <Fade cascade duration={150} delay={100}>
                Nuestra misión...
              </Fade>
            </h1>
            <div className={styles.divUl}>
              <ul>
                <li>
                  <i className="fa-solid fa-seedling"></i>
                  <p>
                    Posibilitar a los usuarios sumergirse en el proceso de
                    producción de ladrillos ecológicos.
                  </p>
                </li>
                <li>
                  <i className="fa-solid fa-seedling"></i>
                  <p>Ofrecer una plataforma interactiva y educativa.</p>
                </li>
                <li>
                  <i className="fa-solid fa-seedling"></i>
                  <p>
                    Permitir a los usuarios experimentar y comprender de manera
                    práctica los desafíos y las decisiones involucradas en la
                    fabricación sostenible de ladrillos.
                  </p>
                </li>
                <li>
                  <i className="fa-solid fa-seedling"></i>
                  <p>
                    Fomentar la conciencia y el conocimiento sobre las prácticas
                    ecoamigables en la construcción.
                  </p>
                </li>
                <li>
                  <i className="fa-solid fa-seedling"></i>
                  <p>
                    Inspirar a una nueva generación de profesionales y empresas
                    a adoptar enfoques más responsables y sostenibles en la
                    industria de la construcción
                  </p>
                </li>
              </ul>
            </div>
          </Zoom>
        </article>
      </div>
    </div>
  );
}

export default Mision;

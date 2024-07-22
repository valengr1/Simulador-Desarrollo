import { useNavigate } from "react-router-dom";
import styles from "../BarraNavegacion/BarraNavegacion.module.css";

function BarraNavegacion() {
  const navigate = useNavigate();


  return (
    <nav className={styles.navbar}>
      <div className={styles.divVolver}>
        <a className={styles.aVolver} onClick={() => { navigate("/") }} >
          <i className="fa-solid fa-arrow-left"></i>
        </a>
      </div>

      <ul>
        <li>
          <a onClick={() => { navigate("/mision") }} >Mision</a>
        </li>
        <a className={styles.logo} href="https://www.fab-brick.com/"></a>

        <li>
          <a onClick={() => { navigate("/instrucciones") }} >Instrucciones</a>
        </li>
      </ul>

    </nav>
  );
}

export default BarraNavegacion;

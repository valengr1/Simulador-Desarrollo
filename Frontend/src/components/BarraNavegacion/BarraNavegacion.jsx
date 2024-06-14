import styles from "../BarraNavegacion/BarraNavegacion.module.css";

function BarraNavegacion() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.divVolver}>
        <a className={styles.aVolver} href="/">
          <i className="fa-solid fa-arrow-left"></i>
        </a>
      </div>

      <ul>
        <li>
          <a href="/mision">Mision</a>
        </li>
        <a className={styles.logo} href="https://www.fab-brick.com/"></a>

        <li>
          <a href="">Instrucciones</a>
        </li>
      </ul>
      
    </nav>
  );
}

export default BarraNavegacion;

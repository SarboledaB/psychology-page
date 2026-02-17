import styles from './Services.module.scss'
import service1 from '../assets/service1.png'
import service2 from '../assets/service2.png'
import service3 from '../assets/service3.png'

function Services() {
  return (
    <section className={styles.services}>
      <div className={styles.decorativeElements}>
        <div className={styles.floatingLeaf}></div>
        <div className={styles.floatingLeaf}></div>
        <div className={styles.floatingLeaf}></div>
        <div className={styles.floatingLeaf}></div>
        <div className={styles.floatingLeaf}></div>
        <div className={styles.floatingLeaf}></div>
      </div>
      
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Mis Servicios</h2>
        
        <div className={styles.cardsGrid}>
          <div className={styles.serviceCard}>
            <div className={styles.illustrationBox}>
              <img src={service1} alt="Servicio 1" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <h3 className={styles.cardTitle}>Terapia Presencial</h3>
            <p className={styles.cardDescription}>
              Sesiones presenciales en Envigado, Antioquia para jóvenes y adultos. Procesos terapéuticos basados en la empatía, ofreciendo un espacio seguro para la reflexión profunda a través de preguntas y herramientas funcionales. Abordamos todas las dimensiones de tu ser con calidez y confrontación terapéutica para compartir tus vivencias, pensamientos y emociones.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.illustrationBox}>
              <img src={service2} alt="Servicio 2" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <h3 className={styles.cardTitle}>Terapia Virtual</h3>
            <p className={styles.cardDescription}>
              Sesiones virtuales a través de Google Meet para jóvenes y adultos en todo el mundo. Procesos terapéuticos basados en la empatía, ofreciendo un espacio seguro para la reflexión profunda a través de preguntas y herramientas funcionales. Abordamos todas las dimensiones de tu ser con calidez y confrontación terapéutica para compartir tus vivencias, pensamientos y emociones.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.illustrationBox}>
              <img src={service3} alt="Servicio 3" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <h3 className={styles.cardTitle}>Acompañamiento deportivo</h3>
            <p className={styles.cardDescription}>
              Acompañamiento psicológico especializado para deportistas de alto rendimiento en deportes de combate. Trabajo individual enfocado en desarrollar autoconfianza, manejar presión, superar el miedo a perder, mejorar concentración y preparación mental para entrenamientos y competencias. Orientado a potenciar el bienestar integral del deportista.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

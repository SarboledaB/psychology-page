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
              Atención personalizada para ayudarte a enfrentar tus dificultades emocionales y mejorar tu bienestar.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.illustrationBox}>
              <img src={service2} alt="Servicio 2" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <h3 className={styles.cardTitle}>Terapia Virtual</h3>
            <p className={styles.cardDescription}>
              Atención personalizada via online para ayudarte a enfrentar tus dificultades emocionales y mejorar tu bienestar.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.illustrationBox}>
              <img src={service3} alt="Servicio 3" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <h3 className={styles.cardTitle}>Acompañamiento deportivo</h3>
            <p className={styles.cardDescription}>
              Atención personalizada en deportistas de alto rendimiento.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

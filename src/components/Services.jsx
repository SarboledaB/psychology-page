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
              Sesiones 1:1 en Envigado- Antioquia, para jóvenes y adultos, procesos terapéuticos llevados desde la empatía, ofreciendo un espacio de reflexión profunda a través de preguntas y herramientas funcionales para ti, entendiendo todas las dimensiones que componen tu ser. Encontrarás calidez y confrontación desde un lugar seguro para compartir tus vivencias, pensamientos y emociones.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.illustrationBox}>
              <img src={service2} alt="Servicio 2" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <h3 className={styles.cardTitle}>Terapia Virtual</h3>
            <p className={styles.cardDescription}>
              Sesiones 1:1 a través de Google meet, apto para jóvenes y adultos en todo el mundo, procesos terapéuticos llevados desde la empatía, ofreciendo un espacio de reflexión profunda a través de preguntas y herramientas funcionales para ti, entendiendo todas las dimensiones que componen tu ser. Encontrarás calidez, confrontación, y un lugar seguro para compartir tus vivencias, pensamientos y emociones.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.illustrationBox}>
              <img src={service3} alt="Servicio 3" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <h3 className={styles.cardTitle}>Acompañamiento deportivo</h3>
            <p className={styles.cardDescription}>
              Acompañamiento psicológico a deportistas de alto rendimiento en deportes de combate, mediante un trabajo individual enfocado en la autoconfianza, presión, miedo a perder, concentración y preparación mental para entrenamientos y competencias. Enfocado a mejorar el bienestar del deportista.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

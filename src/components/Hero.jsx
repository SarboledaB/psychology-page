import React from 'react';
import imagen from '../assets/imagen.png';
import styles from './Hero.module.scss'

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.decorativeLeaves}>
        <div className={styles.leaf}></div>
        <div className={styles.leaf}></div>
        <div className={styles.leaf}></div>
        <div className={styles.leaf}></div>
        <div className={styles.leaf}></div>
        <div className={styles.leaf}></div>
        <div className={styles.leaf}></div>
        <div className={styles.leaf}></div>
        <div className={styles.leaf}></div>
      </div>
      
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <div className={styles.illustrationWrapper}>
            <img src={imagen} className={styles.illustration} alt="Ilustración de psicología" />
          </div>
          <div className={styles.floatingHearts}>
            <div className={styles.heart}></div>
            <div className={styles.heart}></div>
            <div className={styles.heart}></div>
          </div>
        </div>
        
        <div className={styles.rightColumn}>
          <div className={styles.textContent}>
            <div className={styles.profileImageWrapper}>
              <div className={styles.profileImage}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_8qN8Q5umS7TezGHetgD_dRRa7OW14cCAMw&s" alt="foto perfil" />
              </div>
            </div>
            
            <p className={styles.intro}>
              <strong>Hola, soy Mariana Echeverri,</strong> psicóloga colegiada especializada en terapia cognitivo-conductual y en el apoyo emocional.
            </p>
            
            <p className={styles.description}>
              Mi objetivo es acompañarte en el proceso de superar tus dificultades emocionales, brindarte las herramientas que necesitas para mejorar tu bienestar y ayudarte a encontrar el equilibrio en tu vida.
            </p>
            
            <p className={styles.description}>
              Si tienes alguna pregunta, deseas agendar una cita, o simplemente quieres conversar sobre cómo te puedo ayudar, no dudes en ponerte en contacto conmigo.
            </p>
            
            <p className={styles.closing}>
              Estoy aquí para escucharte y ayudarte en todo momento con profesionalismo y empatía.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

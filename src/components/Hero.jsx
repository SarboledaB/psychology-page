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
              Hola, soy Mariana Echeverri Guerra, psicóloga cognitivo-conductual y estudiante de la maestría en Clínica Psicológica.
            </p>
            <p className={styles.description}>
              Acompaño procesos de psicoterapia individual con jóvenes y adultos, brindando un espacio de bienestar emocional, escucha activa y compasión. Mi objetivo es acompañarte en el proceso de superar tus dificultades emocionales, construir las herramientas que necesitas para tu vida y generar una invitación constante a la reflexión y al autoconocimiento.
            </p>
            <p className={styles.description}>
              Si tienes alguna pregunta, deseas agendar una cita o simplemente quieres conversar sobre cómo puedo ayudarte, no dudes en ponerte en contacto conmigo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

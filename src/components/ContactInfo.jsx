import styles from './ContactInfo.module.scss'

function ContactInfo() {
  return (
    <section className={styles.contactInfo}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <svg className={styles.icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" fill="currentColor"/>
            </svg>
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Teléfono</h3>
            <p className={styles.cardText}>+57 314 798 5604</p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <svg className={styles.icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Email</h3>
            <p className={styles.cardText}>psicologamarianaecheverri@gmail.com</p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <svg className={styles.icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Consulta</h3>
            <p className={styles.cardText}>
              <a href="https://www.google.com/maps/search/?api=1&query=Cra.+47+%2319Sur-28,+Envigado,+Antioquia" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>
                Cra. 47 #19Sur-28, <br />Envigado, Antioquia
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactInfo

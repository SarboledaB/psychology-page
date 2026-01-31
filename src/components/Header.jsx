import styles from './Header.module.scss'
import headerImg from '../assets/Header.png'
import headerDesktop from '../assets/Header-Desktop.png'

function Header() {
  return (
    <header className={styles.header}>
      <img src={headerImg} alt="Header mobile" className={styles.headerImage + ' ' + styles.headerImageMobile} />
      <img src={headerDesktop} alt="Header desktop" className={styles.headerImage + ' ' + styles.headerImageDesktop} />
    </header>
  )
}
export default Header
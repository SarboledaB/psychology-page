import styles from './Header.module.scss'
import responsive from './HeaderResponsive.module.scss'
import headerImg from '../assets/Header.png'
import headerDesktop from '../assets/Header-Desktop.png'

function Header() {
  return (
    <header className={styles.header}>
      <img src={headerImg} alt="Header mobile" className={responsive.headerImage + ' ' + responsive.headerImageMobile} />
      <img src={headerDesktop} alt="Header desktop" className={responsive.headerImage + ' ' + responsive.headerImageDesktop} />
    </header>
  )
}
export default Header
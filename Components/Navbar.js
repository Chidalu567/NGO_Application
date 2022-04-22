import Image from 'next/image';
import logoPic from '../public/images/Logo.png';

// fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
// css
import styles from '../styles/nav.module.css';

export const Navbar = () => {
    return (
        <nav className={styles.nav}>

            <div className={styles.imageSection}>
                <Image src={logoPic} width={129} height={126} />
            </div>

            <div className={styles.line1}></div>

            <div className={styles.listSection}>
                <h3>Home</h3>
                <h3>About</h3>
                <h3>Causes</h3>
                <h3>Staff</h3>
            </div>

            <div className={styles.line2}></div>

            <div className={styles.donateSection}>
                <FontAwesomeIcon icon={faBagShopping} style={{ width: 31, height: 37, color:'white'}}/>
                <button type="button">Donate Now</button>
            </div>
        </nav>
    )
}
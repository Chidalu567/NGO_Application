import styles from '../styles/footer.module.css';

export const Footer = () => {
    return (
        <footer className={styles.container}>
            <div className={styles.emailer}>
                <h3>Subscribe to Our Newsletter</h3>
                <div>
                    <input type="email" placeholder="Email" id="email" />
                    <button type="button">Subscribe</button>
                </div>

            </div>
            <div className={styles.belowContainer}>
                <div className={styles.item1}>jjjjj</div>
                <div className={styles.item2}>
                    <h4>Services</h4>
                    <ul>
                        <li>Education for all</li>
                        <li>School development</li>
                        <li>Donations</li>
                        <li>Food</li>
                    </ul>
                </div>
                <div className={styles.item3}>
                    <h4>contacts</h4>
                    <ul>
                        <li>+234 806 372 5125</li>
                        <li>+61 423 278 457</li>
                        <li>+234 703 852 2644</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
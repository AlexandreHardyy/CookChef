import styles from './Footer.module.scss';

function Footer() {
    return (
        <footer className={`${styles.footer} d-flex flex-row align-items-center justify-content-center p-20`}>
            <p>© 2023 CookChef. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
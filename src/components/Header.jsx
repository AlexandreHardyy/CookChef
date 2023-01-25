import styles from "./Header.module.scss";
import cookchefLogo from "../assets/images/cookchef.png";
import { useState } from "react";
import HeaderMenu from "./HeaderMenu";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={`d-flex flex-row align-items-center ${styles.header}`}>
      {/* <i className="fa-solid fa-bars mr-15"></i> */}
      <div className="flex-fill">
        <img src={cookchefLogo} alt="logo cookchef"></img>
      </div>
      <ul className={styles.headerList}>
        <button className="mr-5 btn btn-reverse-primary">
          <i className="fa-sharp fa-solid fa-heart mr-5"></i>
          <span>Wishlist</span>
        </button>
        <button className="btn btn-primary">Connexion</button>
      </ul>
      <i
        onClick={() => setShowMenu(true)}
        className={`fa-solid fa-bars ${styles.headerXs}`}
      ></i>
      {showMenu && (
        <>
          <div onClick={() => setShowMenu(false)} className="calc"></div>
          <HeaderMenu />
        </>
      )}
    </header>
  );
}

export default Header;

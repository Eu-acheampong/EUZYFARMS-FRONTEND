import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavbarTop.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.nav_head}>
        <nav className={styles.nav}>
          <div className={styles.nav_logo}>LOGO</div>
          <div className={styles.nav_menu}>
            <ul className={styles.ul}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Our Contact</Link>
              </li>
              <li>
                <Link to="/login" className={styles.nav_btn}>
                  <button>Login</button>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

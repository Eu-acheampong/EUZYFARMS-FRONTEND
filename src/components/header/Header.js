import React from "react";
import styles from "./Header.module.css";
import { GiChicken } from "react-icons/gi";
import { GiRabbit } from "react-icons/gi";
import { GiCow } from "react-icons/gi";
import { GiGoat } from "react-icons/gi";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <div className={styles.header_text}>
          <h3 className={styles.header_h1}>Make your order</h3>
          <p className={styles.header_p}>
            Click at the button below <br />
            Make your order now
          </p>
          <button className={styles.btn}>Order</button>
        </div>
        <div className={styles.header_container}>
          <div className={styles.header_card}>
            <GiChicken size={40} color="green" />
            <h3>Poultry</h3>
            <p>Healthy chicken</p>
            <p>preserved</p>
            <p>just for you and </p>
          </div>
          <div className={styles.header_card}>
            <GiRabbit size={40} color="green" />
            <h3>Healthy Rabbits</h3>
            <p>Good in omega3</p>
          </div>
          <div className={styles.header_card}>
            <GiCow size={40} color="green" />
            <p>Cow Meat</p>
            <p>Bestred meat</p>
          </div>
          <div className={styles.header_card}>
            <GiGoat size={40} color="green" />
            <p>Healthy goat</p>
            <p>Good for your consumption</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

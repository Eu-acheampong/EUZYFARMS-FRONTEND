import React from "react";
import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div>
      <div className={styles.card}>
        <img className={styles.card_image} src={props.image} alt="Card_Image" />
        <h3 className={styles.card_h3}>{props.heading}</h3>
        <p className={styles.card_p}>{props.description}</p>
        <p className={styles.card_price}>Price:{props.price}</p>
        <button className={styles.card_button}>Place Order</button>
      </div>
    </div>
  );
};

export default Card;

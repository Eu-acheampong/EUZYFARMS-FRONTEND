import React from "react";
import styles from "./contact.module.css";

const Contact = (props) => {
  return (
    <div id="">
      <div>
        <h3>Contact Us</h3>
      </div>
      <div>
        <div className={styles.content}>
          <h4 className={styles.content_h4}>
            {props.heading}Phone:233240347796
          </h4>
          <h4>facebook:Akosualucky farms</h4>
          <h4>LinkedIn: Akosualucky farms</h4>
        </div>
      </div>
    </div>
  );
};

export default Contact;

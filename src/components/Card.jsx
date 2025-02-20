import React from "react";
import styles from "./Card.module.css";

export default function Card({ id, title, img, desc }) {
  console.log(id);
  return (
    <div className={styles.project} key={id}>
      <img src={img} className={styles.image} />
      <div className={styles.cardInfo}>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
}

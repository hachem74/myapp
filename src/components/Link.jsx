import React from "react";
import styles from "./link.module.css";
export default function Link() {
  return (
    <div className={styles.parent}>
      <h1 className={styles.title}>Title</h1>
      <p>Description</p>
    </div>
  );
}

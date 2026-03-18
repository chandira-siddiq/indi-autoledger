import React from "react";
// import { useState } from 'react';
import styles from "../styles/Button.module.css";
export default function Button({ onClick, children, category }) {
  return (
    <button className={styles[category] || styles.default} onClick={onClick}>
      {children}
    </button>
  );
}

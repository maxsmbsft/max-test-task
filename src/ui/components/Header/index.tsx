import React from "react";

import styles from "./styles.module.css";

import { HeaderLogo } from "../HeaderLogo";

export const Header = () => {
  return (
    <header className={styles.headerWrapper}>
      <HeaderLogo />
      <hr className={styles.divider} />
      <span className={styles.logoText}>Официальный дилер Максимум</span>
    </header>
  );
};

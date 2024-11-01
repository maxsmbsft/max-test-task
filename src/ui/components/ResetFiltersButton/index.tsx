import React from "react";

import styles from "./styles.module.css";

import Link from "next/link";

export const ResetFiltersButton = () => {
  return (
    <Link className={styles.resetButton} href={`/cars`}>
      Сбросить фильтры
    </Link>
  );
};

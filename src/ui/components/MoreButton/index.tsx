import React from "react";

import styles from "./styles.module.css";

import Link from "next/link";

export interface MoreButton {
  id?: number;
  brand: string;
}

export const MoreButton = ({ id, brand }: MoreButton) => {
  return (
    <Link className={styles.moreButton} href={`/cars/${brand}/${id}`}>
      Подробнее
    </Link>
  );
};

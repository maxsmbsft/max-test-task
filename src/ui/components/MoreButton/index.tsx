import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";
import { MoreButtonProps } from "@/types";

export const MoreButton = ({ id, brand }: MoreButtonProps) => {
  return (
    <Link className={styles.moreButton} href={`/cars/${brand}/${id}`}>
      Подробнее
    </Link>
  );
};

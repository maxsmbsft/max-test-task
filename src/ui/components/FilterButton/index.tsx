import React from "react";
import Link from "next/link";

import styles from "./style.module.css";

export const FilterButton = ({
  brand,
  className,
}: {
  brand: string;
  className: string;
}) => {
  return (
    <Link className={styles[className]} href={`/cars/${brand}`}>
      {brand}
    </Link>
  );
};

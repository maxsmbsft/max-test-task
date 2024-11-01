"use client";

import React from "react";
import { usePathname } from "next/navigation";

import styles from "./styles.module.css";

import { FilterButton } from "../FilterButton";
import { ResetFiltersButton } from "../ResetFiltersButton";

export const Filters = () => {
  const pathname = usePathname();
  const className = (brand: string) =>
    pathname.slice(6) !== brand ? "filterButton" : "filterButton_active";

  const brandList = [
    "Chery",
    "Haval",
    "Geely",
    "Exeed",
    "Omoda",
    "Changan",
    "Jaecoo",
  ];

  return (
    <div className={styles.filterBlockWrapper}>
      <span className={styles.filterType}>Бренд</span>
      <div className={styles.filtersWrapper}>
        <div className={styles.filterOptionsWrapper}>
          {brandList.map((brand) => (
            <FilterButton
              key={brand}
              brand={brand}
              className={className(brand)}
            />
          ))}
        </div>
        <ResetFiltersButton />
      </div>
    </div>
  );
};

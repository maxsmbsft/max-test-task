import React from "react";
import Image from "next/image";

import styles from "./styles.module.css";

import { MoreButton } from "../MoreButton";

export interface CarProps {
  id: number;
  brand: string;
  brandName: string;
  modelName: string;
  engineSize: number;
  power: number;
  transmission: string;
  photoSrc: string;
}

export const Car = ({
  id,
  brand,
  brandName,
  modelName,
  engineSize,
  power,
  transmission,
  photoSrc,
}: CarProps) => {
  const formattedengineSize = engineSize.toLocaleString("ru-RU");

  return (
    <div className={styles.carWrapper}>
      <Image
        src={photoSrc}
        alt="Название авто"
        width={440}
        height={292}
        priority
        className={styles.photo}
      />
      <span className={styles.name}>
        {brandName} {modelName}
      </span>
      <span className={styles.porperties}>
        {formattedengineSize} / {power} Л.С. / {transmission}
      </span>
      <MoreButton id={id} brand={brand} />
    </div>
  );
};

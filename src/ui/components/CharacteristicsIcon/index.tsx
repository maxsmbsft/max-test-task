import React from "react";
import Image from "next/image";

import styles from "./style.module.css";

import { CharacteristicsiconProps } from "@/types";

export default function CharacteristicsIcon({
  src,
  alt,
}: CharacteristicsiconProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={90}
      height={90}
      className={styles.characteristicIcon}
    />
  );
}

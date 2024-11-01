import React from "react";

import styles from "./styles.module.css";

import { Car } from "@/ui/components/Car";
import { Filters } from "@/ui/components/Filters";
import { getAllCars } from "@/services";

export interface CarBrandRes {
  car_id: number;
  brandName: string;
  modelName: string;
  EngineSize: number;
  Power: number;
  Transmission: string;
  photos: {
    imgs: { url: string }[];
  };
}

export default async function HomePage() {
  const carsList: CarBrandRes[] = await getAllCars("Chery");

  return (
    <div className={styles.homeWrapper}>
      <span className={styles.homeTitle}>Автомобили в СПб</span>
      <div className={styles.contentWrapper}>
        <section className={styles.filterWrapper}>
          <Filters />
        </section>
        <section className={styles.carsWrapper}>
          {carsList.map(
            ({
              car_id,
              brandName,
              modelName,
              EngineSize,
              Power,
              Transmission,
              photos,
            }) => (
              <Car
                key={car_id}
                id={car_id}
                brand="Chery"
                brandName={brandName}
                modelName={modelName}
                engineSize={EngineSize}
                power={Power}
                transmission={Transmission}
                photoSrc={photos.imgs[0].url}
              />
            )
          )}
        </section>
      </div>
    </div>
  );
}

import React from "react";

import styles from "./styles.module.css";

import Carousel from "@/ui/components/Carousel";
import { getAllCars, getCarById } from "@/services";
import { CarBrandRes } from "@/types";
import LegalPurityIcon from "@/ui/components/LegalPurityIcon";
import CharacteristicsIcon from "@/ui/components/CharacteristicsIcon";

export async function generateStaticParams() {
  const cars: CarBrandRes[] = await getAllCars("Chery");

  return cars.map((car) => ({ slug: car.car_id.toString() }));
}

export default async function CarDetails({
  params,
}: {
  params: Promise<{
    brand: string;
    id: number;
  }>;
}) {
  const { brand, id } = await params;
  const car = await getCarById(brand, id);
  const {
    brandName,
    modelName,
    Year,
    vin,
    price,
    EngineSize,
    Power,
    FuelType,
    Transmission,
    photos,
  } = car[0];

  return (
    <div className={styles.pageWrapper}>
      <section className={styles.detailsWrapper}>
        <span className={styles.name}>
          {brandName} {modelName} {Year} года
        </span>
        <span className={styles.vin}>VIN {vin}</span>
        <div className={styles.details}>
          <div className={styles.autoProfileWrapper}>
            <div className={styles.criteriasWrapper}>
              <div className={styles.priceWrapper}>
                <span className={styles.price}>{price} ₽</span>
              </div>
              <div className={styles.legalPurityWrapper}>
                <LegalPurityIcon />
                <span className={styles.legalPurity}>Гарантия юр. чистоты</span>
              </div>
            </div>
            <div className={styles.characteristicsWrapper}>
              <span className={styles.characteristicsTitle}>
                Характеристики
              </span>
              <div className={styles.characteristics}>
                <div className={styles.characteristic}>
                  <CharacteristicsIcon
                    src="/year.png"
                    alt="Иконка года выпуска"
                  />
                  <span className={styles.characteristicText}>
                    {Year} год выпуска
                  </span>
                </div>
                <div className={styles.characteristic}>
                  <CharacteristicsIcon
                    src="/characteristics.png"
                    alt="Иконка характеристик"
                  />
                  <span className={styles.characteristicText}>
                    {EngineSize} л / {Power} л.с. / {FuelType}
                  </span>
                </div>
                <div className={styles.characteristic}>
                  <CharacteristicsIcon
                    src="/transmission.png"
                    alt="Иконка КП"
                  />
                  <span className={styles.characteristicText}>
                    КП - {Transmission}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <Carousel images={photos.imgs} />
        </div>
      </section>
      <aside className={styles.creditWrapper}>
        <span className={styles.creditTitle}>Кредит на новый Chery Tiggo</span>
        <div className={styles.credit}>
          <span className={styles.creditDescription}>
            Оформите кредит на любой автомобиль ассортимента дилерского центра
            «Максимум»
          </span>
          <button className={styles.creditButton}>Оформить</button>
        </div>
      </aside>
    </div>
  );
}

import React from "react";
import Image from "next/image";

import styles from "./styles.module.css";

import Carousel from "@/ui/components/Carousel";
import { getAllCars, getCarById } from "@/services";
import { CarBrandRes } from "../page";

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
                <svg
                  width="39"
                  height="42"
                  viewBox="0 0 39 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.5 40.25L7.43437 30.4937C7.10937 30.2312 6.8724 29.8958 6.72344 29.4875C6.57448 29.0792 6.5 28.6562 6.5 28.2188V6.125C6.5 5.425 6.74375 4.8125 7.23125 4.2875C7.71875 3.7625 8.2875 3.5 8.9375 3.5H30.0625C30.7125 3.5 31.2812 3.7625 31.7687 4.2875C32.2562 4.8125 32.5 5.425 32.5 6.125V28.2188C32.5 28.6562 32.4255 29.0792 32.2766 29.4875C32.1276 29.8958 31.8906 30.2312 31.5656 30.4937L19.5 40.25ZM19.5 36.9688L30.0625 28.2188V6.125H8.9375V28.2188L19.5 36.9688ZM17.7937 26.25L26.975 16.3625L25.2281 14.525L17.7531 22.575L13.7312 18.2438L12.025 20.0813L17.7937 26.25ZM19.5 6.125H8.9375H30.0625H19.5Z"
                    fill="#CA0100"
                  />
                </svg>
                <span className={styles.legalPurity}>Гарантия юр. чистоты</span>
              </div>
            </div>
            <div className={styles.characteristicsWrapper}>
              <span className={styles.characteristicsTitle}>
                Характеристики
              </span>
              <div className={styles.characteristics}>
                <div className={styles.characteristic}>
                  <Image
                    src="/year.png"
                    alt="Иконка года выпуска"
                    width={90}
                    height={90}
                    className={styles.characteristicIcon}
                  />
                  <span className={styles.characteristicText}>
                    {Year} год выпуска
                  </span>
                </div>
                <div className={styles.characteristic}>
                  <Image
                    src="/characteristics.png"
                    alt="Иконка характеристик"
                    width={90}
                    height={90}
                    className={styles.characteristicIcon}
                  />
                  <span className={styles.characteristicText}>
                    {EngineSize} л / {Power} л.с. / {FuelType}
                  </span>
                </div>
                <div className={styles.characteristic}>
                  <Image
                    src="/transmission.png"
                    alt="Иконка КП"
                    width={90}
                    height={90}
                    className={styles.characteristicIcon}
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

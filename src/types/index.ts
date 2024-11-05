export interface CarBrandResPhotos {
  imgs: { url: string }[];
}

export interface CarBrandRes {
  car_id: number;
  brandName: string;
  modelName: string;
  EngineSize: number;
  Power: number;
  Transmission: string;
  photos: CarBrandResPhotos;
}

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

export interface CarouselProps {
  images: { _id: string; url: string }[];
}

export interface MoreButtonProps {
  id?: number;
  brand: string;
}

export interface CharacteristicsiconProps {
  src: string;
  alt: string;
}

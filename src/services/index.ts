export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getAllCars = async (brand: string) => {
  const response = await fetch(API_URL + brand);
  if (!response.ok) throw new Error("Ошибка");

  return response.json();
};

export const getCarById = async (brand: string, id: number) => {
  const response = await fetch(API_URL + brand + `?car_id=${id}`);
  if (!response.ok) throw new Error("Ошибка");

  return response.json();
};

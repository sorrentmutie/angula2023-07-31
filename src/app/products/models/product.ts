export interface Product {
  id: number;
  name: string;
  price: number;
  picture: string;
  availability: boolean;
  arrivalDate: Date;
  category: string;
  address?: Address;
}

export interface Address {
  street: string;
  number: number;
}

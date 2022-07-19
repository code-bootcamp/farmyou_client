export interface IStorage {
  content?: string;
  count?: number;
  createdAt?: Date;
  id?: string;
}

export interface IPaymentUIProps {
  isCart: string;
  localfoodBaskets: any;
  bfoodBaskets: any;
  payProduct: any;
  localPrice: number;
  bPrice: number;
}

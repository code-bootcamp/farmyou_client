import { ChangeEvent, MouseEvent } from "react";

export interface IDetailProps {
  data: {
    fetchUglyProduct?: {
      id?: string;
      title?: string;
      content?: string;
      origin?: string;
      quantity?: number;
      createdAt?: Date;
      price?: number;
      seller?: {
        id: string;
        name: string;
      };
    };
  };
}

export interface IDetailUIProps {
  onClickSubImage: (event: MouseEvent<HTMLImageElement>) => void;
  mainImageSrc: string;
  onChangeBuyQuantity: (event: ChangeEvent<HTMLInputElement>) => void;
  buyQuantity: number;
  data?: {
    fetchUglyProduct?: {
      id?: string;
      title?: string;
      content?: string;
      origin?: string;
      quantity?: number;
      createdAt?: Date;
      price?: number;
      seller?: {
        id: string;
        name: string;
      };
    };
    fetchDirectProduct?: {
      id?: string;
      title?: string;
      content?: string;
      origin?: string;
      quantity?: number;
      createdAt?: Date;
      price?: number;
    };
  };
}

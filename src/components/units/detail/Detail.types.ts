import { ChangeEvent, MouseEvent } from "react";

export interface IDetailProps {
  onClickSubImage: (event: MouseEvent<HTMLImageElement>) => void;
  mainImageSrc: string;
  onChangeBuyQuantity: (event: ChangeEvent<HTMLInputElement>) => void;
  buyQuantity: number;
}

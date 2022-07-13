import { MouseEvent } from "react";

export interface ISellerMypageUiProps {
  isSelect: boolean;
  trackingRef: any;
  onClickLocalList: () => void;
  onClickBfoodList: () => void;
  onClickLocalDetail: (event: MouseEvent<HTMLDivElement>) => void;
  onClickBfoodDetail: (event: MouseEvent<HTMLDivElement>) => void;
  onClickPostTracking: () => void;
}

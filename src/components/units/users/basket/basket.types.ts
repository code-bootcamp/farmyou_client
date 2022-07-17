export interface IBFoodBasketsItems {
  _id: string;
  title: string;
  quantity: number;
  price: number;
  name: string;
}
export interface ILocalFoodBasketsItems {
  _id: string;
  title: string;
  quantity: number;
  price: number;
}
export interface IBasketUIProps {
  bFoodData: any;
  setBfoodBasketsCount: any;
  bFoodSum: number;
  bFoodSums: any;
  setBFoodSums: any;
  localFoodData: any;
  setLocalfoodBasketsCount: any;
  localFoodSum: number;
  localFoodSums: any;
  setLocalFoodSums: any;

  //   {
  //     _id: string;
  //     title: string;
  //     quantity: number;
  //     price: number;
  //     seller: {
  //       name: "string";
  //     };
  //   };
}

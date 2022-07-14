export interface IBFoodBasketsItems {
  _id: string;
  title: string;
  quantity: number;
  price: number;
  name: string;
}
export interface IBasketUIProps {
  bFoodData: any;
  setBfoodBasketsCount: any;
  bFoodSum: number;
  bFoodSums: any;
  setBFoodSums: any;

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

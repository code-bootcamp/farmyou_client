import { useEffect, useState } from "react";
import BasketUI from "./basket.presenter";
import { IBFoodBasketsItems } from "./basket.types";

export default function Basket() {
  const [bfoodBasketsCount, setBfoodBasketsCount] = useState(0);
  const [bFoodSum, setBFoodSum] = useState(0);
  const [bFoodSums, setBFoodSums] = useState([]);
  const [bFoodBasketsItems, setBFoodBasketsItems] = useState<
    IBFoodBasketsItems[]
  >([]);
  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("bfoodbaskets") || "[]");
    setBFoodBasketsItems(baskets);
    const temp = baskets.map((el: any) => el.price);
    setBFoodSum(temp.reduce((acc: number, cur: number) => acc + cur));
    setBFoodSums(temp);
  }, [bfoodBasketsCount]);

  // console.log(bFoodSums);
  useEffect(() => {
    if (bFoodSums !== undefined)
      setBFoodSum(bFoodSums.reduce((acc, cur) => acc + cur));
  }, [bFoodSums]);

  return (
    <BasketUI
      bFoodData={bFoodBasketsItems}
      setBfoodBasketsCount={setBfoodBasketsCount}
      bFoodSum={bFoodSum}
      bFoodSums={bFoodSums}
      setBFoodSums={setBFoodSums}
    />
  );
}

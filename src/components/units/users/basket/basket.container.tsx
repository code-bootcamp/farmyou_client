import { useEffect, useState } from "react";
import BasketUI from "./basket.presenter";
import { IBFoodBasketsItems, ILocalFoodBasketsItems } from "./basket.types";

export default function Basket() {
  const [bfoodBasketsCount, setBfoodBasketsCount] = useState(0);
  const [bFoodSum, setBFoodSum] = useState(0);
  const [bFoodSums, setBFoodSums] = useState([]);
  const [bFoodBasketsItems, setBFoodBasketsItems] = useState<
    IBFoodBasketsItems[]
  >([]);
  const [localFoodBasketsCount, setLocalFoodBasketsCount] = useState(0);
  const [localFoodSum, setLocalFoodSum] = useState(0);
  const [localFoodSums, setLocalFoodSums] = useState([]);
  const [localFoodBasketsItems, setLocalFoodBasketsItems] = useState<
    ILocalFoodBasketsItems[]
  >([]);
  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("bfoodbaskets") || "[]");
    setBFoodBasketsItems(baskets);
    if (baskets.length !== 0) {
      const temp = baskets.map((el: any) => el.price);
      setBFoodSum(temp.reduce((acc: number, cur: number) => acc + cur));
      setBFoodSums(temp);
    } else {
      setBFoodSum(0);
    }
  }, [bfoodBasketsCount]);
  useEffect(() => {
    const baskets = JSON.parse(
      localStorage.getItem("localfoodbaskets") || "[]"
    );
    setLocalFoodBasketsItems(baskets);
    if (baskets.length !== 0) {
      const temp = baskets.map((el: any) => el.price);
      setLocalFoodSum(temp.reduce((acc: number, cur: number) => acc + cur));
      setLocalFoodSums(temp);
    } else {
      setLocalFoodSum(0);
    }
  }, [localFoodBasketsCount]);

  // console.log(bFoodSums);
  useEffect(() => {
    if (bFoodSums.length !== 0)
      setBFoodSum(bFoodSums.reduce((acc, cur) => acc + cur));
  }, [bFoodSums]);
  useEffect(() => {
    if (localFoodSums.length !== 0)
      setLocalFoodSum(localFoodSums.reduce((acc, cur) => acc + cur));
  }, [localFoodSums]);

  return (
    <BasketUI
      bFoodData={bFoodBasketsItems}
      setBfoodBasketsCount={setBfoodBasketsCount}
      bFoodSum={bFoodSum}
      bFoodSums={bFoodSums}
      setBFoodSums={setBFoodSums}
      localFoodData={localFoodBasketsItems}
      setLocalfoodBasketsCount={setLocalFoodBasketsCount}
      localFoodSum={localFoodSum}
      localFoodSums={localFoodSums}
      setLocalFoodSums={setLocalFoodSums}
    />
  );
}

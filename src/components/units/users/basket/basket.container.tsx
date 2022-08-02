import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BasketUI from "./basket.presenter";
import { IBaskets } from "./basket.types";

export default function Basket() {
  const router = useRouter();
  const [bfoodBasketsCount, setBfoodBasketsCount] = useState(0);
  const [bFoodSum, setBFoodSum] = useState(0);
  const [bFoodSums, setBFoodSums] = useState<number[]>([]);
  const [bFoodBasketsItems, setBFoodBasketsItems] = useState<IBaskets[]>([]);
  const [localFoodBasketsCount, setLocalFoodBasketsCount] = useState(0);
  const [localFoodSum, setLocalFoodSum] = useState(0);
  const [localFoodSums, setLocalFoodSums] = useState<number[]>([]);
  const [localFoodBasketsItems, setLocalFoodBasketsItems] = useState<
    IBaskets[]
  >([]);
  useEffect(() => {
    const Bbaskets = JSON.parse(localStorage.getItem("bfoodbaskets") || "[]");
    setBfoodBasketsCount(Bbaskets.length);
    const Lbaskets = JSON.parse(
      localStorage.getItem("localfoodbaskets") || "[]"
    );
    setLocalFoodBasketsCount(Lbaskets.length);
  }, []);

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("bfoodbaskets") || "[]");
    setBFoodBasketsItems(baskets);
    if (baskets.length !== 0) {
      const temp = baskets.map((el: IBaskets) => el.price * el.count);
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
      const temp = baskets.map((el: IBaskets) => el.price * el.count);
      setLocalFoodSum(temp.reduce((acc: number, cur: number) => acc + cur));
      setLocalFoodSums(temp);
    } else {
      setLocalFoodSum(0);
    }
  }, [localFoodBasketsCount]);

  useEffect(() => {
    if (bFoodSums.length !== 0)
      setBFoodSum(bFoodSums.reduce((acc: number, cur: number) => acc + cur));
  }, [bFoodSums]);

  useEffect(() => {
    if (localFoodSums.length !== 0)
      setLocalFoodSum(localFoodSums.reduce((acc, cur) => acc + cur));
  }, [localFoodSums]);

  const onClickToPayment = () => {
    sessionStorage.setItem("isCart", "cart");
    router.push(`/users/payment`);
  };
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
      router={router}
      onClickToPayment={onClickToPayment}
    />
  );
}

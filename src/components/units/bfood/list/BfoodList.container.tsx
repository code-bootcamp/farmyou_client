import { useQuery } from "@apollo/client";
import BfoodListUI from "./BfoodList.presenter";
import { FETCH_UGLY_PRODUCTS } from "./BfoodList.queries";

export default function BfoodList() {
  const { data } = useQuery(FETCH_UGLY_PRODUCTS);
  return <BfoodListUI data={data} />;
}

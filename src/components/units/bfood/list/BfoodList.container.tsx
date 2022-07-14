import { useQuery } from "@apollo/client";
import BfoodListUI from "./BfoodList.presenter";
import { FETCH_UGLY_PRODUCTS } from "./BfoodList.queries";

export default function BfoodList() {
  const { data } = useQuery(FETCH_UGLY_PRODUCTS);
  const drag = (event: any) => {
    event.dataTransfer.setData("object", event.target.id);
  };
  return <BfoodListUI data={data} drag={drag} />;
}

import { useQuery } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import BfoodListUI from "./BfoodList.presenter";
import { FETCH_UGLY_PRODUCTS } from "./BfoodList.queries";
import _ from "lodash";

export default function BfoodList() {
  const [sorted, setSorted] = useState("최신순");
  const { data, refetch } = useQuery(FETCH_UGLY_PRODUCTS, {
    variables: {
      page: 1,
    },
  });
  const onChangeSorted = (event: any) => {
    setSorted(event);
    refetch({ sortBy: event, page: 1 });
  };
  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  const getDebounce = _.debounce((data) => {
    refetch({ title: data, sortBy: sorted, page: 1 });
  }, 200);

  const drag = (event: any) => {
    event.dataTransfer.setData("object", event.target.id);
  };
  return (
    <BfoodListUI
      data={data}
      drag={drag}
      onChangeSorted={onChangeSorted}
      onChangeSearch={onChangeSearch}
    />
  );
}

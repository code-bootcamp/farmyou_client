import { useQuery } from "@apollo/client";
import { useState } from "react";
import LocalfoodListUI from "./LocalfoodList.presenter";
import {
  FETCH_DIRECT_PRODUCTS_BY_DIRECT_STORE_ID,
  FETCH_DIRECT_PRODUCTS_BY_STORE_AND_CATEGORY_BY_DATE_CREATED,
} from "./LocalfoodList.queries";

export default function LocalfoodList() {
  const storeId = "4dad258d-3530-4b2a-9b89-a4daae0163c8";
  const [isCategory, setIsCategory] = useState(false);

  const { data: allData } = useQuery(FETCH_DIRECT_PRODUCTS_BY_DIRECT_STORE_ID, {
    variables: { directStoreId: storeId },
  });
  const { data: categoryData, refetch } = useQuery(
    FETCH_DIRECT_PRODUCTS_BY_STORE_AND_CATEGORY_BY_DATE_CREATED,
    {
      variables: {
        directStoreId: storeId,
        categoryId: "",
        page: 1,
      },
    }
  );

  const onClickAll = () => {
    setIsCategory(false);
  };

  const onClickCategory = (event: any) => {
    console.log(event.currentTarget.id);
    setIsCategory(true);
    refetch({
      directStoreId: storeId,
      categoryId: event.currentTarget.id,
      page: 1,
    });
  };
  const drag = (event: any) => {
    event.dataTransfer.setData("object", event.target.id);
  };
  return (
    <LocalfoodListUI
      onClickCategory={onClickCategory}
      onClickAll={onClickAll}
      allData={allData}
      categoryData={categoryData}
      isCategory={isCategory}
      drag={drag}
    />
  );
}

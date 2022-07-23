import { useQuery } from "@apollo/client";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import LocalfoodListUI from "./LocalfoodList.presenter";
import { FETCH_DIRECT_PRODUCTS } from "./LocalfoodList.queries";
import _ from "lodash";
import { useRouter } from "next/router";

export default function LocalfoodList() {
  const router = useRouter();
  const [storeId, setStoreId] = useState<string | null>(null);
  const [storeName, setStoreName] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [text, setText] = useState();
  const [sorted, setSorted] = useState("최신순");
  useEffect(() => {
    setStoreId(JSON.parse(sessionStorage.getItem("DirectStoreId" || "")).id);
    setStoreName(
      JSON.parse(sessionStorage.getItem("DirectStoreId" || "")).name
    );
  }, []);
  const { data, refetch } = useQuery(FETCH_DIRECT_PRODUCTS, {
    variables: { page: 1, directStoreId: storeId },
  });

  const onClickAll = () => {
    refetch({
      directStoreId: storeId,
      sortBy: sorted,
      page: 1,
      categoryId: "",
      title: "",
    });
  };

  const onClickCategory = (event: any) => {
    setCategoryId(event.currentTarget.id);
    refetch({
      directStoreId: storeId,
      categoryId: event.currentTarget.id,
      title: "",
      sortBy: sorted,
      page: 1,
    });
    setText("");
  };
  const drag = (event: any) => {
    event.dataTransfer.setData("object", event.target.id);
  };
  const onChangeSorted = (event: any) => {
    setSorted(event);
    refetch({ sortBy: event, directStoreId: storeId, page: 1 });
  };
  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    getDebounce(event.target.value);
  };
  const getDebounce = _.debounce((data) => {
    refetch({
      title: data,
      directStoreId: storeId,
      categoryId: "",
      sortBy: sorted,
      page: 1,
    });
  }, 200);
  const onClickToDetail = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/localfood/${JSON.parse(event.currentTarget.id).id}`);
  };
  return (
    <LocalfoodListUI
      onClickCategory={onClickCategory}
      onClickAll={onClickAll}
      data={data}
      drag={drag}
      onChangeSorted={onChangeSorted}
      onChangeSearch={onChangeSearch}
      onClickToDetail={onClickToDetail}
      text={text}
      storeName={storeName}
    />
  );
}

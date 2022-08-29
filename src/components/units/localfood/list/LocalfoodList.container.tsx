import { useQuery } from "@apollo/client";
import {
  ChangeEvent,
  DragEvent,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import LocalfoodListUI from "./LocalfoodList.presenter";
import {
  FETCH_CATEGORIES,
  FETCH_DIRECT_PRODUCTS,
} from "./LocalfoodList.queries";
import _ from "lodash";
import { useRouter } from "next/router";
import { IFetchCategories } from "./LocalfoodList.types";

export default function LocalfoodList() {
  const router = useRouter();
  const [storeId, setStoreId] = useState<string>("");
  const [storeName, setStoreName] = useState("");
  // const [categoryId, setCategoryId] = useState<string>("");
  const [text, setText] = useState("");
  const [sorted, setSorted] = useState<string>("최신순");
  const myRef = useRef<any>();

  useEffect(() => {
    if (
      JSON.parse(sessionStorage.getItem("DirectStoreId") || "[]")?.length === 0
    ) {
      router.push("/");
    }
    setStoreId(JSON.parse(sessionStorage.getItem("DirectStoreId") || "[]").id);
    setStoreName(
      JSON.parse(sessionStorage.getItem("DirectStoreId") || "[]").name
    );
  }, []);
  const { data: categories } = useQuery(FETCH_CATEGORIES);
  const idArray = categories?.fetchCategories.map(
    (el: IFetchCategories) => el.id
  );
  const { data, refetch, fetchMore } = useQuery(FETCH_DIRECT_PRODUCTS, {
    variables: {
      page: 1,
      directStoreId: storeId,
      sortBy: "최신순",
      categoryId: "",
      title: text,
    },
  });

  const onClickAll = () => {
    myRef.current.value = "";
    refetch({
      directStoreId: storeId,
      sortBy: sorted,
      page: 1,
      categoryId: "",
      title: "",
    });
    setText("");
  };

  const onClickCategory = (event: MouseEvent<HTMLDivElement>) => {
    myRef.current.value = "";
    // setCategoryId(idArray[event.currentTarget.id]);
    refetch({
      directStoreId: storeId,
      categoryId: idArray[event.currentTarget.id],
      title: "",
      sortBy: sorted,
      page: 1,
    });
    setText("");
  };
  const drag = (event: DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData("object", event.currentTarget.id);
  };
  const onChangeSorted = (event: string) => {
    setSorted(event);
    refetch({ sortBy: event, directStoreId: storeId, page: 1, title: text });
  };
  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };
  const getDebounce = _.debounce((data: string) => {
    setText(data);
    refetch({
      title: data,
      directStoreId: storeId,
      categoryId: "",
      sortBy: sorted,
      page: 1,
    });
  }, 700);
  const onClickToDetail = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/localfood/${JSON.parse(event.currentTarget.id).id}`);
  };
  const loadFunc = () => {
    // 데이터가 있을 떄만 fetchMore 해준다.
    if (!data) return;
    fetchMore({
      variables: {
        page: Math.ceil(data.fetchDirectProductsSortedByTitle.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!prev.fetchDirectProductsSortedByTitle) {
          return;
        }
        if (!fetchMoreResult.fetchDirectProductsSortedByTitle)
          return {
            fetchDirectProductsSortedByTitle: [
              ...prev.fetchDirectProductsSortedByTitle,
            ],
          };
        return {
          fetchDirectProductsSortedByTitle: [
            ...prev.fetchDirectProductsSortedByTitle,
            ...fetchMoreResult.fetchDirectProductsSortedByTitle,
          ],
        };
      },
    });
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
      loadFunc={loadFunc}
      myRef={myRef}
    />
  );
}

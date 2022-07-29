import { useQuery } from "@apollo/client";
import { ChangeEvent, DragEvent, MouseEvent, useState } from "react";
import BfoodListUI from "./BfoodList.presenter";
import { FETCH_UGLY_PRODUCTS } from "./BfoodList.queries";
import { useRouter } from "next/router";
import _ from "lodash";

export default function BfoodList() {
  const router = useRouter();
  const [sorted, setSorted] = useState<string>("최신순");
  const [text, setText] = useState("");
  const { data, refetch, fetchMore } = useQuery(FETCH_UGLY_PRODUCTS, {
    variables: { page: 1, sortBy: sorted, title: text },
  });
  const onChangeSorted = (event: string) => {
    setSorted(event);
    refetch({ sortBy: event, page: 1, title: text });
  };
  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  const getDebounce = _.debounce((data: string) => {
    setText(data);
    refetch({ title: data, sortBy: sorted, page: 1 });
  }, 700);

  const drag = (event: DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData("object", event.currentTarget.id);
  };
  const onClickToDetail = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/bfood/${JSON.parse(event.currentTarget.id).id}`);
  };
  const loadFunc = () => {
    // 데이터가 있을 떄만 fetchMore 해준다.
    if (!data) return;
    fetchMore({
      variables: {
        page: Math.ceil(data.fetchUglyProductsSortedByTitle.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!prev.fetchUglyProductsSortedByTitle) {
          return;
        }
        if (!fetchMoreResult.fetchUglyProductsSortedByTitle)
          return {
            fetchUglyProductsSortedByTitle: [
              ...prev.fetchUglyProductsSortedByTitle,
            ],
          };
        return {
          fetchUglyProductsSortedByTitle: [
            ...prev.fetchUglyProductsSortedByTitle,
            ...fetchMoreResult.fetchUglyProductsSortedByTitle,
          ],
        };
      },
    });
  };
  return (
    <BfoodListUI
      data={data}
      drag={drag}
      onChangeSorted={onChangeSorted}
      onChangeSearch={onChangeSearch}
      loadFunc={loadFunc}
      onClickToDetail={onClickToDetail}
    />
  );
}

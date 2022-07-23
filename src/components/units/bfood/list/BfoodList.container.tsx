import { useQuery } from "@apollo/client";
import { ChangeEvent, MouseEvent, useState } from "react";
import BfoodListUI from "./BfoodList.presenter";
import { FETCH_UGLY_PRODUCTS } from "./BfoodList.queries";
import _ from "lodash";
import { useRouter } from "next/router";

export default function BfoodList() {
  const router = useRouter();
  const [sorted, setSorted] = useState<string>("최신순");

  const { data, refetch } = useQuery(FETCH_UGLY_PRODUCTS, {
    variables: {},
  });
  const onChangeSorted = (event: ChangeEvent<HTMLSelectElement>) => {
    setSorted(event);
    refetch({ sortBy: event });
  };
  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  const getDebounce = _.debounce((data) => {
    refetch({ title: data, sortBy: sorted });
  }, 200);

  const drag = (event: any) => {
    event.dataTransfer.setData("object", event.target.id);
  };
  const onClickToDetail = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/bfood/${JSON.parse(event.currentTarget.id).id}`);
  };
  // console.log(Math.ceil(data.fetchUglyProductsSortedByTitle.length / 10) + 1);
  // const loadFunc = () => {
  //   // 데이터가 있을 떄만 fetchMore 해준다.
  //   if (!data) return;
  //   fetchMore({
  //     variables: {
  //       page: Math.ceil(data.fetchUglyProductsSortedByTitle.length / 10) + 1,
  //     },
  //     updateQuery: (prev, { fetchMoreResult }) => {
  //       if (!fetchMoreResult.fetchUglyProductsSortedByTitle)
  //         return {
  //           fetchUglyProductsSortedByTitle: [
  //             ...prev.fetchUglyProductsSortedByTitle,
  //           ],
  //         };
  //       return {
  //         fetchUglyProductsSortedByTitle: [
  //           ...prev.fetchUglyProductsSortedByTitle,
  //           ...fetchMoreResult.fetchUglyProductsSortedByTitle,
  //         ],
  //       };
  //     },
  //   });
  // };
  return (
    <BfoodListUI
      data={data}
      drag={drag}
      onChangeSorted={onChangeSorted}
      onChangeSearch={onChangeSearch}
      // loadFunc={loadFunc}
      onClickToDetail={onClickToDetail}
    />
  );
}

import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

const LocalMarket = styled.div`
  width: 70vw;
  max-width: 32rem;
  border: 1px solid #ccc;
  border-radius: 20px;
  margin: 2vw 0px;
  display: flex;
  padding: 2vw 3vw;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
  &:hover {
    box-shadow: 10px 5px 5px #f6651e60;
    border: 1.2px solid #f6651e60;
    transform: scale(1.05);
    transition: 0.3s;
  }
`;

const MarketName = styled.div`
  font-size: 1.7rem;
  @media (max-width: 1200px) {
    font-size: 2.4vw;
  }
`;
const MarketAddress = styled.div`
  font-size: 1rem;
  @media (max-width: 1200px) {
    font-size: 2vw;
  }
`;

const FETCH_DIRECT_STORE = gql`
  query fetchDirectStore($name: String!) {
    fetchDirectStore(name: $name) {
      id
      name
    }
  }
`;

export default function LocalListCapsule(props: any) {
  const router = useRouter();
  const { data } = useQuery(FETCH_DIRECT_STORE, {
    variables: {
      name: props.el?.place_name,
    },
  });
  const onClickMoveToList = (event: MouseEvent<HTMLDivElement>) => {
    if (!data) {
      Modal.error({ content: "등록되지 않은 매장입니다!" });
      return;
    }
    const directStoreData = {
      id: data?.fetchDirectStore.id,
      name: data?.fetchDirectStore.name,
    };
    sessionStorage.setItem("DirectStoreId", JSON.stringify(directStoreData));
    router.push(`/localfood`);
  };
  return (
    <LocalMarket onClick={onClickMoveToList}>
      <MarketName>{props.el?.place_name}</MarketName>
      <MarketAddress>{props.el?.address_name}</MarketAddress>
    </LocalMarket>
  );
}

import BuyerMypage from "../../../src/components/units/users/mypage/buyer/BuyerMypage.container";
import SellerMypage from "../../../src/components/units/users/mypage/seller/SellerMypage.container";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";

const HeaderWrapper = styled.div`
  padding: 50px 10% 0 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const MessageBox = styled.div`
  width: 100%;
  height: 50px;
  background-color: #809497;
  padding: 10px 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Icon = styled.img`
  width: 20px;
  height: 25px;
`;

const Header = styled.div`
  font-size: 2rem;
  font-weight: 700;
`;

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      id
      name
      email
      type
    }
  }
`;

export default function MypagePage() {
  const [isCheck, setIsCheck] = useState(false);
  const [isWhoPage, setIsWhoPage] = useState("");

  const { data, loading } = useQuery(FETCH_USER_LOGGED_IN);

  useEffect(() => {
    console.log(data);
    if (data?.fetchUserLoggedIn.type === "user") {
      setIsCheck(false);
      setIsWhoPage("마이 페이지");
    } else {
      setIsCheck(true);
      setIsWhoPage("판매자 페이지");
    }
  }, [data]);
  console.log(isCheck, loading, data);

  return (
    <>
      {loading || (
        <>
          <HeaderWrapper>
            <Header>{isWhoPage}</Header>
          </HeaderWrapper>
          {isCheck && <SellerMypage userData={data} />}
          {isCheck || <BuyerMypage userData={data} />}
        </>
      )}
    </>
  );
}

import styled from "@emotion/styled";

const LocalMarket = styled.div`
  width: 32rem;
  border: 1px solid #ccc;
  border-radius: 20px;
  margin: 2vw 0px;
  display: flex;
  padding: 2vw 3vw;
  flex-direction: column;
  justify-content: space-around;
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
export default function LocalListCapsule() {
  return (
    <LocalMarket>
      <MarketName>원당농협 로컬푸드직매장</MarketName>
      <MarketAddress>경기도 고양시 덕양구 고양대로1369번길 69</MarketAddress>
    </LocalMarket>
  );
}

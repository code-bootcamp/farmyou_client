import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 236px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  border: 1px solid #f6e7d1;

  @media (max-width: 689px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 137px;
    margin: 0px;
  }

  :hover {
    transform: scale(1.05);
    transition: 0.3s;
    box-shadow: 3px 4px 10px rgba(0, 0, 0, 0.6);
  }
`;

const ItemImage = styled.img`
  width: 100%;
  height: 210px;
  background-color: #bdbdbd;

  @media (max-width: 689px) {
    width: 137px;
    height: 108.5px;
  }
`;

const ItemContentsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 0px 0px 5px 5px;

  @media (max-width: 639px) {
    width: 100%;
  }
`;

const ItemSeller = styled.div`
  font-size: 10px;
  color: #bdbdbd;
  padding-bottom: 5px;
`;
const ItemName = styled.div`
  font-size: 15px;
  font-weight: bold;
  padding-bottom: 20px;
`;

const ItemPrice = styled.div`
  font-size: 14px;
  font-weight: bold;
  width: 100%;
  text-align: end;
`;

export default function ListItem() {
  return (
    <Wrapper>
      <ItemImage />
      <ItemContentsWrapper>
        <ItemSeller>연희네 농장</ItemSeller>
        <ItemName>못난이 사과 1kg</ItemName>
        <ItemPrice>10000원</ItemPrice>
      </ItemContentsWrapper>
    </Wrapper>
  );
}

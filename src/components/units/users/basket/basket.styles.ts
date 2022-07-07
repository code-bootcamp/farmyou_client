import styled from "@emotion/styled";

export const OutLine = styled.div`
  width: 100%;
  margin: 0px auto;
`;
export const PageHeader = styled.div`
  padding-left: 200px;
  width: 100%;
  font-size: 2.5vw;
  font-weight: 700;
  @media (max-width: 575px) {
    padding-left: 5vw;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  padding: 50px 10vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 575px;
  @media (max-width: 575px) {
    padding: 5vw;
  } ;
`;
export const Header = styled.div`
  width: 100%;
  font-size: 2vw;
  font-weight: 700;
  text-align: left;
  padding-bottom: 10px;
`;
export const DevideLine = styled.div`
  width: 100%;
  border-top: 1px solid #f6651e;
  margin: 10px 0px;
`;

export const ListWrapper = styled.div`
  width: 100%;
  margin-bottom: 50px;
`;
export const Text = styled.div`
  font-size: 1vw;
`;

export const DevideWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (max-width: 575px) {
  }
`;
export const Left = styled.div`
  width: 100%;
  padding-right: 20px;
  /* border-right: 1px solid #bdbdbd; */
`;
export const Right = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #bdbdbd;
`;

export const ProductCount = styled.input`
  width: 30%;
  text-align: center;
`;

export const BtnWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 575px) {
    width: 30%;
  } ;
`;
export const RightUp = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
export const UpBtn = styled.img`
  cursor: pointer;
`;

export const RightDown = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Payment = styled.div`
  width: 100%;
`;

export const Price = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Delivery = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;
export const Total = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Won = styled.span`
  font-size: 16px;
  margin-left: 5px;
`;

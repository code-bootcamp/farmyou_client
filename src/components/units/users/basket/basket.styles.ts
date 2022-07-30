import styled from "@emotion/styled";

export const Body = styled.div`
  width: 100%;
  padding: 50px 10vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 1320px) {
    min-width: 0px;
    padding: 50px 5vw;
  }
  @media (max-width: 575px) {
    /* padding: 5vw; */
    padding: 5vw;
  } ;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 1200px;
  @media (max-width: 1320px) {
    min-width: 0px;
  }

  @media (max-width: 575px) {
    /* padding: 5vw; */
  } ;
`;

export const PageHeader = styled.div`
  width: 100%;
  font-size: 2rem;
  font-weight: 700;
  @media (max-width: 575px) {
  }
`;

export const Header = styled.div`
  width: 100%;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: left;
  padding-top: 30px;
  @media (max-width: 575px) {
    padding-top: 10px;
  }
`;

export const ListWrapper = styled.div`
  width: 100%;
  margin-bottom: 50px;
`;

export const DivideLine = styled.div`
  height: 1px;
  background-color: #f1b89c;
  width: 100%;
  margin: 20px 0px;
`;

export const Payment = styled.div`
  width: 90%;
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 0;
`;

export const Text = styled.div`
  font-size: 1rem;
`;

export const Price = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Won = styled.span`
  font-size: 1rem;
  margin-left: 10px;
`;

export const Total = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const BtnWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 575px) {
    width: 50%;
  } ;
`;

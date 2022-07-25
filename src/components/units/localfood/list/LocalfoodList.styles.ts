import styled from "@emotion/styled";
import { Input } from "antd";

export const OutLine = styled.div`
  width: 100%;
`;

export const Wrapper = styled.div`
  width: 80%;
  margin: 0px auto;

  @media (max-width: 689px) {
    width: 100%;
  }
`;

export const Divide = styled.div`
  margin: 20px 0px;
  width: 100%;
  height: 1px;
  border: 1px solid #bdbdbd;
`;

export const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  height: 70px;
`;
export const MarketName = styled.div`
  width: auto;
  font-size: 1.2rem;
  margin: 0px 45px 10px 20px;
`;
export const SearchOption = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
`;
export const SearchInputWrapper = styled.div`
  width: 20rem;
  margin: 0px 45px 0px 20px;
`;
export const SearchInput = styled(Input)`
  width: 20rem;
  margin-right: 45px;
  margin-left: 20px;
`;

export const CategoryWrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  padding: 20px 25vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: auto;
  white-space: nowrap;

  @media (max-width: 889px) {
    display: grid;
    padding: 20px 5vw;
    align-items: center;
    justify-items: center;
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ItemWrapper = styled.div`
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  @media (max-width: 689px) {
    display: flex;
    flex-direction: column;
  }
`;

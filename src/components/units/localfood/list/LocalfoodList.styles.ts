import styled from "@emotion/styled";
import { Input } from "antd";

export const Wrapper = styled.div`
  width: 80vw;

  @media (max-width: 689px) {
    width: 100%;
  }
`;

export const Divide = styled.div`
  width: 100%;
  height: 1px;
  border: 1px solid #bdbdbd;
  margin: 20px 0px;
`;

export const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  height: 70px;
`;

export const SearchInput = styled(Input)`
  width: 20vw;
  margin: 0px 45px 0px 20px;
`;

export const CategoryWrapper = styled.div`
  width: 100%;
  padding: 20px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: auto;
  white-space: nowrap;

  @media (max-width: 689px) {
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ImageWrapper = styled.span`
  /* width: 38.5vw; */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const CategoryImage = styled.img`
  width: 65px;
  height: 65px;
  margin: 10px 20px;
  background-color: #c6d8f2;
  border-radius: 10px;

  @media (max-width: 689px) {
    width: 50px;
    height: 50px;
    margin: 10px 20px;
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

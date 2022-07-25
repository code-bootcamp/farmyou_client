import styled from "@emotion/styled";
import { Input } from "antd";

export const OutLine = styled.div`
  width: 100%;
`;

export const Wrapper = styled.div`
  width: 80%;
  /* max-height: 1000px; */
  margin: 0px auto;

  @media (max-width: 689px) {
    width: 100%;
  }
`;

export const Text = styled.div`
  font-size: 2vw;
`;

export const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 70px;
`;
export const SearchInputWrapper = styled.div`
  width: 20rem;
  margin: 0px 45px 0px 20px;
`;
export const SearchInput = styled(Input)`
  width: 20rem;
  margin: 0px 45px 0px 20px;
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

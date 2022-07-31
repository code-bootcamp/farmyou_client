import styled from "@emotion/styled";

export const OutLine = styled.div`
  width: 100%;
`;

export const Wrapper = styled.div`
  width: 80%;
  margin: 0px auto;

  @media (max-width: 689px) {
    width: 100%;
    padding: 20px;
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
  margin-bottom: 20px;
  @media (max-width: 689px) {
    width: 100%;
  }
`;
export const MarketName = styled.div`
  width: auto;
  font-size: 1.2rem;
  margin: 0px 45px 10px 20px;
  @media (max-width: 689px) {
    margin: 0px 0px 10px 0px;
  }
`;
export const SearchOption = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  @media (max-width: 689px) {
    width: 100%;
  }
`;
export const SearchInputWrapper = styled.div`
  width: 20rem;
  margin: 0px 45px 0px 20px;
  @media (max-width: 689px) {
    margin: 0px 0px 0px 20px;
  }
`;
export const SearchInput = styled.input`
  width: 20rem;
  height: 32px;
  padding: 0px 12px;
  min-width: 200px;
  border: 1px solid #ccc;
  margin: 0px 45px 0px 20px;
  &:focus {
    outline-color: #4ebfff;
    outline-style: solid;
    outline-width: 1px;
  }
  @media (max-width: 689px) {
    margin: 0px;
    min-width: 100px;
    width: 60vw;
  }
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
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(236px, 1fr));
  justify-items: center;
  gap: 20px;

  @media (max-width: 689px) {
    display: flex;
    flex-direction: column;
  }
`;

import styled from "@emotion/styled";

export const OutLine = styled.div`
  width: 100%;
`;
export const Wrapper = styled.div`
  width: 80%;
  /* max-height: 1000px; */
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 689px) {
    width: 100%;
    padding: 20px;
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
  @media (max-width: 689px) {
    width: 100%;
  }
`;
export const SearchInputWrapper = styled.div`
  width: 20rem;
  margin: 0px 45px 0px 20px;
  @media (max-width: 689px) {
    /* width: 10vw; */
    margin: 0px 0px 0px 20px;
  }
`;
export const SearchInput = styled.input`
  width: 20rem;
  height: 32px;
  min-width: 200px;
  /* border: 1px solid #ccc; */
  padding: 0px 12px;
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

export const ItemWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(236px, 1fr));
  justify-items: center;
  gap: 20px;

  @media (max-width: 689px) {
    flex-direction: column;
  }
`;

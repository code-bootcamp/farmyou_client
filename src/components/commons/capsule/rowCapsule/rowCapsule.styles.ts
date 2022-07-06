import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  /* 피그마 너비 862px */
  height: 165px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
`;

export const ImageWrapper = styled.div`
  width: 30%;
  height: 165px;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px;
`;

export const ProductName = styled.div``;
export const DeleteBtn = styled.div``;
export const ProductPrice = styled.div``;
export const ProductSeller = styled.div``;
export const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

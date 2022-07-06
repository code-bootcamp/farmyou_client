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

export const ProductName = styled.div`
  width: 75%;
`;
export const DeleteBtn = styled.div`
  cursor: pointer;
`;
export const ProductPrice = styled.div`
  width: 50%;
  font-weight: 600;
`;
export const ProductSeller = styled.div`
  width: 50%;
  font-size: 12px;
  color: #bdbdbd;
`;
export const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ProductCount = styled.input`
  width: 35%;
  text-align: right;
  margin: 0px 10px;
`;

// 가격, 수량 랩
export const Right = styled.div`
  display: flex;
  flex-direction: row;
`;
export const RightUp = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
export const Text = styled.div`
  font-weight: 700;
`;
export const RightDown = styled.div`
  width: 20px;
  display: flex;
  flex-direction: column;
`;
export const UpBtn = styled.img`
  cursor: pointer;
`;

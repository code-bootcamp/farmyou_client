import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Header = styled.div`
  width: 100%;
  font-size: 24px;
  font-weight: 700;
  text-align: left;
  padding-bottom: 10px;
`;
export const DevideLine = styled.div`
  width: 100%;
  border-top: 1px solid #bdbdbd;
  margin: 10px 0px;
`;

export const ListWrapper = styled.div`
  width: 100%;
  margin-bottom: 50px;
`;
export const Text = styled.div``;

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
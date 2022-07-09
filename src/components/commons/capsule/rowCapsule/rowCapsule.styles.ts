import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  /* 피그마 너비 862px */
  /* height: 200px; */
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  padding: 1vw;
  margin-bottom: 1rem;
  /* min-width: 575px; */
  @media (max-width: 575px) {
    /* height: 150px; */
  }
`;

export const ImageWrapper = styled.img`
  width: 141px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: contain;
  margin-right: 2vw;
  @media (max-width: 575px) {
    /* height: 150px; */
    width: 100px;
  }
`;
export const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  @media (max-width: 994px) {
    /* height: 150px; */
    flex-direction: column;
  }
`;

export const InfoLeftWrapper = styled.div`
  width: 75%;
  padding: 10px;
  @media (max-width: 994px) {
    /* height: 150px; */
    width: 90%;
  }
`;

export const Name = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  @media (max-width: 575px) {
    font-size: 1rem;
  }
`;

export const Seller = styled.div`
  font-size: 1rem;
  padding: 10px 0px;
  @media (max-width: 575px) {
    font-size: 0.8rem;
  }
`;

export const Price = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  @media (max-width: 575px) {
    font-size: 1rem;
  }
`;

export const InfoRightWrapper = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media (max-width: 994px) {
    /* height: 150px; */
    width: 100%;
    padding: 0 10px;
    padding-bottom: 10px;
    align-items: flex-end;
  }
`;

export const DeleteButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
`;

export const DeleteButton = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 10px;
  top: 10px;
`;

export const CountWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 994px) {
    /* height: 150px; */
    /* width: 50%; */
  }
`;

export const CountText = styled.div`
  font-size: 1.2rem;
  width: 50px;
  @media (max-width: 575px) {
    font-size: 0.9rem;
  }
`;

export const CountInput = styled.input`
  font-size: 1.2rem;
  width: 100px;
  height: 2rem;
  padding: 0.5em;
  outline-color: #f66512;
`;

export const CountUpDownButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CountUpDownButton = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

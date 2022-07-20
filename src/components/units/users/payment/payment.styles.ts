import styled from "@emotion/styled";
import { Checkbox } from "antd";

export const Header = styled.h1`
  padding: 1vw 10vw;
  margin: 0px auto;
  font-size: 1.7rem;
  @media (max-width: 671px) {
    font-size: 2.1rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0px auto;
  @media (max-width: 671px) {
    padding-bottom: 70vw;
  }
`;

export const PayWrapper = styled.div`
  padding: 1vw 0;
  width: 100%;
  /* margin: 0px auto; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LeftWrapper = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  @media (max-width: 671px) {
    width: 100%;
  }
`;

export const Title = styled.div`
  width: 100%;
  font-size: 1.5rem;
  @media (max-width: 671px) {
    font-size: 2rem;
  }
`;

export const DivideLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #f6651e;
  margin: 20px 0px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  @media (max-width: 671px) {
    flex-direction: column;
    font-size: 4vw;
  }
`;
export const Text = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  font-size: 0.8vw;
  @media (max-width: 671px) {
    font-size: 4vw;
  }
`;

export const ComponentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 170px;
`;

export const AddressSearchBtn = styled.button`
  width: 8vw;
  font-size: 0.7vw;
  height: 2.5vw;
  min-height: 35px;
  min-width: 75px;
  border-radius: 45px;
  border: 0px solid;
  background-color: #d9d9d9;
  @media (max-width: 671px) {
    font-size: 1.4vw;
  }
`;

export const RightWrapper = styled.div`
  width: 30%;
  margin-top: 5vw;
  display: flex;
  flex-direction: column;
  @media (max-width: 671px) {
    position: fixed;
    width: 80%;
    margin: 0px auto;
    bottom: 0;
    background-color: white;
  }
`;

export const PayBoxWrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.44);
  border-bottom: 0px solid;
  width: 100%;
  padding: 1.5vw;
  display: flex;
  flex-direction: column;
`;

export const PayBoxTitle = styled.div`
  font-size: 1.5vw;
  padding-bottom: 1vw;
  @media (max-width: 671px) {
    font-size: 4vw;
  }
`;

export const BasketTotalPriceWrapper = styled.div`
  font-size: 1vw;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1vw 0;
  @media (max-width: 671px) {
    font-size: 3vw;
  }
`;

export const BasketName = styled.div``;

export const BasketPrice = styled.div`
  font-weight: bold;
`;

export const PayBoxDivide = styled.div`
  width: 100%;
  height: 1px;
  background-color: #a7a7a7;
`;

export const PayBoxWarningWrapper = styled.div`
  width: 100%;
  background-color: #d9d9d9;
  padding: 1vw;
  font-size: 0.7vw;
  border: 1px solid rgba(0, 0, 0, 0.44);
  border-top: 0px solid;
  @media (max-width: 671px) {
    font-size: 3vw;
  }
`;

export const CheckBox = styled(Checkbox)`
  font-size: 1vw;
  @media (max-width: 671px) {
    font-size: 3vw;
  }
`;

export const PayOrCancelBtn = styled.button`
  width: 75%;
  margin: 0px auto;
  padding: 0.5vw;
  font-size: 1.5vw;
  border: 0px solid;
  margin-top: 2vw;
  border-radius: 5px;
  color: white;

  @media (max-width: 671px) {
    font-size: 4vw;
  }
`;

export const BasketWrapper = styled.div`
  width: 100%;

  margin: 0px auto;
`;

export const BasketItemWrapper = styled.div`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  margin: 2vw 0;
  padding: 1vw;
`;

export const BasketItemImage = styled.img`
  width: 15vw;
  object-fit: contain;
`;

export const BasketItemTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2vw;
`;
export const BasketItemName = styled.div`
  font-size: 1vw;
  @media (max-width: 671px) {
    font-size: 3vw;
  }
`;
export const BasketItemSeller = styled.div`
  font-size: 0.8vw;
  padding: 1vw 0;
  @media (max-width: 671px) {
    font-size: 2.5vw;
  }
`;

export const BasketItemPriceCount = styled.div`
  font-size: 1.1vw;
  font-weight: bold;
  @media (max-width: 671px) {
    font-size: 4vw;
  }
`;

export const CustomModal = styled.div`
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0px 10%;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  min-width: 300px;
  border-radius: 5px;

  background-color: white;
  padding: 30px;
  position: relative;
`;

export const TitleContentsText = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const CancelButton = styled.img`
  width: 10px;
  height: 10px;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

export const AddressListWrapper = styled.div`
  width: 100%;
  /* height: 150px; */
  padding: 5px;
  border-bottom: 1px solid #bdbdbd;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 10px;
`;

export const AddressListMain = styled.div`
  width: 15%;
`;

export const AddressListAddress = styled.div`
  width: 70%;
`;

export const AddressListCheck = styled.div`
  cursor: pointer;
  width: 15%;
  text-align: center;

  :hover {
    color: #f6651e;
  }
`;

export const AddressAddButton = styled.button`
  width: 100px;
  height: 30px;
  font-size: 1rem;
`;

export const NewAddress = styled.div`
  padding: 10px;
  font-size: 1rem;
  width: 100%;
  text-align: end;
  cursor: pointer;
  :hover {
    color: #f6651e;
  }
`;

export const Address = styled.div`
  width: 100%;
  height: 10vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 140px;
  @media (max-width: 575px) {
    /* height: 110px; */
  }
`;

export const ZipcodeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const AddressInput = styled.div`
  width: 50%;
`;

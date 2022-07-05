import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 50px 0px;

  @media (max-width: 575px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

// 이미지 랩
export const ImageWrapper = styled.div`
  width: 50%;
`;

export const Img = styled.img`
  width: 100%;
  @media (max-width: 575px) {
    width: 300px;
  }
`;

// 폼 랩
export const FormWrapper = styled.div`
  width: 60%;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  padding: 20px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  padding-bottom: 40px;
`;
export const Text = styled.div`
  width: 100%;
  font-size: 18px;
  font-weight: 700;
`;
export const DevideLine = styled.div`
  border-top: 1px solid #055143;
  width: 100%;
  padding: 10px 0px;
`;
export const PhoneWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 70px;
`;

export const BtnWrapper = styled.div`
  padding: 0px 0px 0px 30px;
  width: 35%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 575px) {
    flex-direction: column;
  }
`;

export const Select = styled.select`
  width: 50%;
  height: 50px;
  text-align: center;
  font-size: 20px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  @media (max-width: 575px) {
    height: 25px;
  }
`;
export const Option = styled.option`
  text-align: center;
`;

// Address 랩
export const Address = styled.div`
  width: 100%;
  height: 190px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 575px) {
    height: 110px;
  }
`;
export const ZipcodeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const AddressInput = styled.div`
  width: 50%;
`;
export const AddressBtn = styled.div`
  width: 34%;
`;
export const AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 120px;
  @media (max-width: 575px) {
    height: 70px;
  }
`;

export const SubmitWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

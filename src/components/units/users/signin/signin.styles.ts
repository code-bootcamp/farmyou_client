import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin: 0px auto;
  background-image: url("/bgi/bgi.signup.png");
  background-size: cover;
  /* @media (max-width: 575px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  } */
`;
export const Header = styled.div`
  font-size: 2vw;
  font-weight: 700;
  margin-bottom: 30px;
`;

// 폼 랩
export const FormWrapper = styled.div`
  width: 60%;
  height: 100%;
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
  margin-bottom: 10px;
`;
export const Text = styled.div`
  font-size: 1.5vw;
  font-weight: 700;
`;
export const DevideLine = styled.div`
  border-top: 1px solid #f6651e;
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
  width: 20%;
  height: 2.5vw;
  min-height: 35px;
  text-align: center;
  font-size: 16px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  @media (max-width: 575px) {
    height: 35px;
    width: 50%;
  }
`;
export const Option = styled.option`
  text-align: center;
`;

// Address 랩
export const Address = styled.div`
  width: 100%;
  height: 170px;
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
`;

export const AddressInput = styled.div`
  width: 50%;
`;
export const AddressBtn = styled.div`
  width: 100%;
`;
export const AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  padding-bottom: 20px;
  @media (max-width: 575px) {
    height: 100px;
  }
`;

export const SubmitWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

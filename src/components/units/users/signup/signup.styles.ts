import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px auto;
  background-color: #f8f8f8;
  background-size: cover;
  padding: 7vh 5vw;

  @media (max-width: 575px) {
  }
`;

export const Header = styled.div`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 15px;
  color: #f6651e;
`;

export const HeaderDivideLine = styled.div`
  border-top: 1px solid #f6651e;
`;

// 폼 랩
export const FormWrapper = styled.div`
  width: 750px;
  height: 100%;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  padding: 4vw;
  /* margin: 8vw 0; */
  @media (max-width: 750px) {
    width: 100%;
    min-width: 0px;
  }
  @media (max-width: 575px) {
    min-width: 0px;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* align-items: center; */
  text-align: center;
  padding: 1vw 0px;
  @media (max-width: 603px) {
    /* min-width: 0px; */
    flex-direction: column;
  }
`;
export const ErrWrapper = styled.div`
  width: 100%;
`;
export const Err = styled.div`
  color: red;
  text-align: left;
`;
export const Text = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  width: 180px;
  text-align: left;

  @media (max-width: 575px) {
    font-size: 1.2rem;
    width: 130px;
  }
`;

export const DivideLine = styled.div`
  border-top: 1px solid #f6651e;
  width: 100%;
  padding: 10px 0px;
`;

export const PhoneWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* height: 70px; */
`;

export const PhoneAgreementWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;

  @media (max-width: 575px) {
  }
`;

// Address 랩
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

export const AddressSearchBtn = styled.button`
  width: 10vw;
  min-width: 150px;
  height: 100%;
  background-color: #d9d9d9;
  font-size: 1rem;
  font-weight: 500;
  border: 1px solid #f6651e;
  background-color: #fff;
  color: #f6651e;
  border-radius: 35px;
  margin-left: 10px;
  &:hover {
    background-color: #f6651e;
    border: 1px solid #f6651e;
    color: #fff;
  }

  @media (max-width: 575px) {
    min-width: 100px;
    font-size: 0.8rem;
  }
`;

export const PhoneAgreementButton = styled.button`
  width: 10vw;
  min-width: 150px;
  height: 100%;
  background-color: #fff;

  border: 1px solid #f6651e;
  color: #f6651e;
  border-radius: 35px;
  margin-left: 10px;
  font-size: 1rem;
  font-weight: 500;

  &:hover {
    border: 1px solid #f6651e;
    background-color: #f6651e;
    color: #fff;
  }

  @media (max-width: 575px) {
    min-width: 100px;
    font-size: 0.8rem;
  }
`;

export const SubmitWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 2vw;
`;

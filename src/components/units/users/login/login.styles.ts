import styled from "@emotion/styled";

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #f8f8f8;
  @media (max-width: 575px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  margin-left: 10px;
  width: 85px;
  height: 35px;
  background-color: #fff;
  border: 1px solid #f5561e;
  border-radius: 5px;
  color: #f5561e;
  &:hover {
    background-color: #f5561e;
    color: #fff;
  }
`;
export const FootWrapper = styled.div`
  width: 100%;
  padding-right: 9px;
`;
export const DivideLine = styled.div`
  width: 100%;
  border-top: 1px solid #f6651e;
`;
export const LoginWrapper = styled.div`
  width: 517.5px;
  margin: 0px auto;
  height: 550px;
  border: 1px solid #cccccc;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media (max-width: 575px) {
    width: 100%;
  }
`;
export const FindPwd = styled.div`
  width: 100%;
  text-align: right;
  color: #bdbdbd;
  font-size: 0.5rem;
  cursor: pointer;
`;

export const EmailWrapper = styled.div`
  margin-top: 10px;
`;
export const EmailInput = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  &:focus {
    outline-color: #f5561e;
  }
`;
export const PhoneWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0px;
`;
export const PhoneInput = styled.input`
  width: 80%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #bdbdbd;
  &:focus {
    outline-color: #f5561e;
  }
`;
export const PhoneButton = styled.button`
  background-color: #fff;
  border: 1px solid #f5561e;
  border-radius: 9px;
  color: #f5561e;
  &:hover {
    background-color: #f5561e;
    color: #fff;
  }
`;
export const TokenWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const PhoneToken = styled.input`
  width: 80%;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  &:focus {
    outline-color: #f5561e;
  }
`;
export const TokenCheckBtn = styled.button`
  border: 1px solid #f5561e;
  border-radius: 9px;
  background-color: #fff;
  color: #f5561e;
  height: 40px;
  &:hover {
    background-color: #f5561e;
    color: #fff;
  }
`;
export const Contents = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const PwdWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const PwdInput = styled.input`
  width: 70%;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  &:focus {
    outline-color: #f5561e;
  }
`;

export const PwdInputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const PwdErr = styled.div`
  width: 100%;
  color: red;
  font-size: 0.5rem;
`;

export const PwdChangeBtn = styled.button`
  width: 20%;
  border: none;
  background-color: #f5561e;
  color: #fff;
  border-radius: 5px;
`;

export const Text = styled.div`
  font-size: 2rem;
  font-weight: 700;
  padding-bottom: 20px;
`;

export const InputWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 78%;
  height: 220px;
`;
export const Input = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  margin-top: 25px;
`;

export const BtnWrapper = styled.div`
  width: 65%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 575px) {
    width: 35%;
  } ;
`;

export const SocialLogin = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const Img = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

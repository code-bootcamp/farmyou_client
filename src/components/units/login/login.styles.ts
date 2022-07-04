import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 50px;
`;

export const LoginWrapper = styled.div`
  width: 640px;
  height: 550px;
  border: 1px solid #cccccc;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const Text = styled.div`
  font-size: 24px;
  font-weight: 700;
  padding-bottom: 20px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 500px;

  height: 220px;
`;
export const Input = styled.input`
  width: 494px;
  height: 50px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  margin-top: 25px;
`;

export const BtnWrapper = styled.div`
  width: 494px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
`;
export const BtnGray = styled.div`
  color: #fff;
  background-color: #bdbdbd;
  width: 200px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  cursor: pointer;
`;
export const BtnGreen = styled.div`
  color: #fff;
  background-color: #055143;
  width: 200px;
  height: 50px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  cursor: pointer;
`;

export const SocialLogin = styled.div`
  width: 494px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const Img = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

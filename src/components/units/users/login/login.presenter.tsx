import ButtonComponent from "../../../commons/buttons";
import InputComponent from "../../../commons/inputs";
import * as S from "./login.styles";

export default function LoginUI() {
  return (
    <S.Wrapper>
      <S.LoginWrapper>
        <S.InputWrapper>
          <S.Text>로그인</S.Text>
          <S.DivideLine></S.DivideLine>
          <InputComponent placeholder="Email address" />
          <InputComponent placeholder="Password" />
        </S.InputWrapper>
        <S.BtnWrapper>
          <ButtonComponent title="회원가입" buttonColor="#bdbdbd" />
          <ButtonComponent title="로그인" buttonColor="#F6651E" />
        </S.BtnWrapper>
        <S.SocialLogin>
          <S.Img src="/icons/naver.png" alt="" />
          <S.Img src="/icons/google.png" alt="" />
          <S.Img src="/icons/kakao.png" alt="" />
        </S.SocialLogin>
      </S.LoginWrapper>
    </S.Wrapper>
  );
}

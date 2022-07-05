import ButtonComponent from "../../../commons/buttons";
import InputComponent from "../../../commons/inputs";
import * as S from "./login.styles";

export default function LoginUI() {
  return (
    <S.Wrapper>
      <img src="/logoimgs/FarmYouLogo.jpg" alt="로고이미지" />

      <S.LoginWrapper>
        <S.InputWrapper>
          <S.Text>로그인</S.Text>
          <InputComponent placeholder="Email address" />
          <InputComponent placeholder="Password" />
        </S.InputWrapper>
        <S.BtnWrapper>
          <ButtonComponent title="회원가입" buttonColor="#bdbdbd" />
          <ButtonComponent title="로그인" buttonColor="#055143" />
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

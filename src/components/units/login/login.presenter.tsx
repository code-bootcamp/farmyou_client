import * as S from "./login.styles";

export default function LoginUI() {
  return (
    <S.Wrapper>
      <img src="/logoimgs/FarmYouLogo.jpg" alt="로고이미지" />

      <S.LoginWrapper>
        <S.InputWrapper>
          <S.Text>로그인</S.Text>
          <S.Input placeholder="Email address" />
          <S.Input placeholder="Create password" />
        </S.InputWrapper>
        <S.BtnWrapper>
          <S.BtnGray>회원가입</S.BtnGray>
          <S.BtnGreen>로그인</S.BtnGreen>
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

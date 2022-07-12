import ButtonComponent from "../../../commons/buttons";
import InputComponent from "../../../commons/inputs";
import * as S from "./login.styles";

export default function LoginUI(props: any) {
  return (
    <S.Wrapper>
      <form onSubmit={props.handleSubmit(props.onClickLogin)}>
        <S.LoginWrapper>
          <S.InputWrapper>
            <S.Text>로그인</S.Text>
            <S.DivideLine></S.DivideLine>
            <InputComponent
              placeholder="Email address"
              register={props.register("email")}
            />
            <InputComponent
              placeholder="Password"
              register={props.register("password")}
            />
          </S.InputWrapper>
          <S.BtnWrapper>
            <ButtonComponent
              type="button"
              title="회원가입"
              buttonColor="#bdbdbd"
              onClick={props.onClickMove(`/users/signup`)}
            />
            <ButtonComponent
              type="submit"
              title="로그인"
              buttonColor="#F6651E"
            />
          </S.BtnWrapper>
          {/* <div>소셜로그인</div>
          <S.DivideLine></S.DivideLine> */}
          <S.SocialLogin>
            <S.Img src="/icons/naver.png" alt="" />
            <S.Img src="/icons/google.png" alt="" />
            <S.Img src="/icons/kakao.png" alt="" />
          </S.SocialLogin>
        </S.LoginWrapper>
      </form>
    </S.Wrapper>
  );
}

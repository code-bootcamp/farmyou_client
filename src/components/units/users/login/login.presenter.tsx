import { Radio } from "antd";
import ButtonComponent from "../../../commons/buttons";
import InputComponent from "../../../commons/inputs";
import * as S from "./login.styles";
import { IPropsLogin } from "./login.types";

export default function LoginUI(props: IPropsLogin) {
  return (
    <S.Wrapper
      onSubmit={props.handleSubmit(
        props.isUser ? props.onClickLogin : props.onClickSellerLogin
      )}
    >
      {/* <form onSubmit={props.handleSubmit(props.onClickLogin)}> */}
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
        <Radio.Group onChange={props.onChangeAuth}>
          <Radio value={true}>구매자 로그인</Radio>
          <Radio value={false}>판매자 로그인</Radio>
        </Radio.Group>
        <S.BtnWrapper>
          <ButtonComponent
            type="button"
            title="회원가입"
            buttonColor="#bdbdbd"
            onClick={props.onClickMove(`/users/signup`)}
          />
          {props.isUser ? (
            <ButtonComponent
              type="submit"
              title="로그인"
              buttonColor="#F6651E"
            />
          ) : (
            <ButtonComponent
              type="submit"
              title="로그인"
              buttonColor="#F6651E"
            />
          )}
        </S.BtnWrapper>
        {/* <div>소셜로그인</div>
          <S.DivideLine></S.DivideLine> */}
        <S.SocialLogin>
          <S.Img src="/icons/naver.png" alt="" />
          <S.Img src="/icons/google.png" alt="" />
          <S.Img src="/icons/kakao.png" alt="" />
        </S.SocialLogin>
      </S.LoginWrapper>
      {/* </form> */}
    </S.Wrapper>
  );
}
